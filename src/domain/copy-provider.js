/**
 * copy to clipboard
 * @param {string} content
 */
export const copyToClipboard = content => {
    const textArea = document.createElement('textarea');
    textArea.textContent = content;
    document.body.append(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
};