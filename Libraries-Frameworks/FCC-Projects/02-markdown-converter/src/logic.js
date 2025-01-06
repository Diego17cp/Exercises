export const convertMarkdown = (markdown) => {
    if (!markdown) return "";

    // Escape HTML characters first
    markdown = markdown
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    // Headers (from h3 to h1 to avoid conflicts)
    markdown = markdown
        .replace(/^### (.+)$/gm, "<h3>$1</h3>")
        .replace(/^## (.+)$/gm, "<h2>$1</h2>")
        .replace(/^# (.+)$/gm, "<h1>$1</h1>");

    // Code blocks (process before inline code)
    markdown = markdown
        .replace(/```([\s\S]+?)```/g, function(match, code) {
            return '<pre><code>' + 
                code.trim()
                    .replace(/\n/g, '<br>')
                    .replace(/\s/g, '&nbsp;') +
            '</code></pre>'
        })
        .replace(/`([^`]+)`/g, "<code>$1</code>");

    // Text styling
    markdown = markdown
        .replace(/(\*\*\*|___)(.+?)(\*\*\*|___)/g, "<strong><em>$2</em></strong>")
        .replace(/(\*\*|__)(.+?)(\*\*|__)/g, "<strong>$2</strong>")
        .replace(/(\*|_)(.+?)(\*|_)/g, "<em>$2</em>")
        .replace(/~~(.+?)~~/g, "<del>$1</del>");

    // Links and images
    markdown = markdown
        .replace(/!\[(.+?)\]\((.+?)\)/g, '<img src="$2" alt="$1">')
        .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');

    // Lists (handle nested lists)
    markdown = markdown
        .replace(/^(\s*)?(\*|-)\s(.+)$/gm, "$1<li>$3</li>")
        .replace(/^(\s*)?(\d+\.)\s(.+)$/gm, "$1<li>$3</li>")
        .replace(/(<li>[\s\S]+?<\/li>)/g, "<ul>$1</ul>");

    // Blockquotes (handle nested quotes)
    markdown = markdown.replace(/^>\s(.+)$/gm, "<blockquote>$1</blockquote>");


    // Paragraphs (process last)
    markdown = markdown.replace(
        /^(?!<(h|ul|li|strong|em|a|del|ol|code|pre|blockquote|table|tr|td|hr))(.+)$/gm,
        "<p>$2</p>"
    );

    return markdown;
};
