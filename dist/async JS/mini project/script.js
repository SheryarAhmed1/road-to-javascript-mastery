const container = document.querySelector("#container");
const inp = document.querySelector("#inp");
const form = document.querySelector("form");
const btn = form.querySelector("button");
const originalButtonContent = btn.innerHTML;

function createElement(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;

    if (text !== undefined) {
        element.textContent = text;
    }

    return element;
}

function showMessage(message, isError = false) {
    const panel = createElement(
        "div",
        `rounded-xl border px-6 py-8 text-center shadow-sm ${isError
            ? "border-red-200 bg-red-50"
            : "border-gray-200 bg-white"
        }`
    );
    const title = createElement(
        "h2",
        `text-base font-semibold ${isError ? "text-red-700" : "text-gray-900"}`,
        isError ? "Search couldn't be completed" : "Searching GitHub..."
    );
    const detail = createElement(
        "p",
        `mt-1 text-sm ${isError ? "text-red-600" : "text-gray-600"}`,
        message
    );

    panel.append(title, detail);
    container.replaceChildren(panel);
}

function addStat(stats, label, value) {
    const item = createElement("div", "rounded-lg border border-gray-200 bg-gray-50 p-4");
    item.append(
        createElement("p", "text-2xl font-semibold tracking-tight text-gray-900", new Intl.NumberFormat().format(value ?? 0)),
        createElement("p", "mt-1 font-mono text-xs text-gray-500", label)
    );
    stats.append(item);
}

function showUser(user) {
    const card = createElement("article", "overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm");
    const content = createElement("div", "p-6 sm:p-8");
    const heading = createElement("div", "flex flex-col gap-5 sm:flex-row sm:items-center");
    const avatar = createElement("img", "h-20 w-20 shrink-0 rounded-lg border border-gray-200 object-cover");
    avatar.src = user.avatar_url;
    avatar.alt = `${user.login}'s avatar`;
    avatar.loading = "lazy";

    const identity = createElement("div", "min-w-0 flex-1");
    identity.append(
        createElement("h2", "truncate text-2xl font-semibold tracking-tight text-gray-900", user.name || user.login)
    );

    const login = createElement("a", "mt-1 inline-block text-sm font-medium text-blue-600 transition hover:text-blue-700", `@${user.login}`);
    login.href = user.html_url;
    login.target = "_blank";
    login.rel = "noopener noreferrer";
    identity.append(login);

    const badge = createElement(
        "span",
        "w-fit rounded-full border border-gray-200 bg-gray-50 px-3 py-1 font-mono text-xs text-gray-600",
        user.type || "GitHub user"
    );
    heading.append(avatar, identity, badge);
    content.append(heading);

    content.append(
        createElement(
            "p",
            "mt-6 max-w-2xl text-sm leading-6 text-gray-600",
            user.bio || "This developer hasn't added a bio yet."
        )
    );

    const stats = createElement("div", "mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3");
    addStat(stats, "Public repositories", user.public_repos);
    addStat(stats, "Followers", user.followers);
    addStat(stats, "Following", user.following);
    content.append(stats);

    const details = [];
    if (user.location) details.push(`Location: ${user.location}`);
    if (user.company) details.push(`Company: ${user.company}`);
    if (user.blog) details.push(`Website: ${user.blog}`);

    if (details.length) {
        const detailList = createElement("div", "mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-gray-200 pt-5");
        details.forEach((detail) => {
            detailList.append(createElement("span", "text-xs text-gray-600", detail));
        });
        content.append(detailList);
    }

    const footer = createElement("div", "mt-7 flex flex-col gap-3 border-t border-gray-200 pt-5 sm:flex-row sm:items-center sm:justify-between");
    footer.append(createElement("p", "text-xs text-gray-500", "Explore more about this developer"));

    const profileLink = createElement("a", "inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700");
    profileLink.href = user.html_url;
    profileLink.target = "_blank";
    profileLink.rel = "noopener noreferrer";
    profileLink.append(document.createTextNode("View GitHub profile"));

    const arrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    arrow.setAttribute("class", "h-4 w-4");
    arrow.setAttribute("viewBox", "0 0 24 24");
    arrow.setAttribute("fill", "none");
    arrow.setAttribute("stroke", "currentColor");
    arrow.setAttribute("stroke-width", "2");
    arrow.setAttribute("aria-hidden", "true");
    const arrowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    arrowPath.setAttribute("d", "M7 17 17 7M8 7h9v9");
    arrow.append(arrowPath);
    profileLink.append(arrow);
    footer.append(profileLink);
    content.append(footer);
    card.append(content);
    container.replaceChildren(card);
}

async function getUser(username) {
    username = username.trim();

    if (!username) {
        showMessage("Enter a GitHub username to get started.", true);
        inp.focus();
        return;
    }

    showMessage(`Looking up @${username}`);
    btn.disabled = true;
    btn.innerHTML = '<span class="animate-pulse">Searching...</span>';

    try {
        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(username)}`,
            {
                headers: {
                    Accept: "application/vnd.github+json"
                }
            }
        );

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("Check the spelling or try another username.");
            }
            if (response.status === 403) {
                throw new Error("GitHub's search limit has been reached. Please try again in a little while.");
            }
            throw new Error(`GitHub returned an error (${response.status}). Please try again.`);
        }

        const user = await response.json();
        showUser(user);
    } catch (error) {
        showMessage(
            error instanceof Error ? error.message : "Something went wrong. Please try again.",
            true
        );
    } finally {
        btn.disabled = false;
        btn.innerHTML = originalButtonContent;
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    getUser(inp.value);
});
