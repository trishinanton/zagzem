export function isImage(url) {
    if (url) {
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    }
}
