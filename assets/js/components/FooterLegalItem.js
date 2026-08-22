export function FooterLegalItem({ url, title }) {
    let data = {};
    if (url === undefined || title === undefined) {
        data = {
            url: '',
            title: ''
        }
        return { url, title };
    }
    return (
        `
            <li class="footer-legal__item">
                <a href="${url}" class="footer-legal__link">${title}</a>
            </li>
        `
    )
}