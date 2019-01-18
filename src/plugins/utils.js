/**
 * @description 图片延迟加载
 * @returns {boolean}
 */
export const LazyLoadImage = () => {
    const loadImg = (it) => {
        const testImage = document.createElement('img')
        testImage.src = it.getAttribute('data-src')
        testImage.addEventListener('load', () => {
            it.src = testImage.src
            it.style.backgroundImage = 'none'
            it.style.backgroundColor = 'transparent'
        })
        it.removeAttribute('data-src')
    }

    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.pipe-content__reset img').forEach((data) => {
            if (data.getAttribute('data-src')) {
                loadImg(data)
            }
        })
        return false
    }

    if (window.imageIntersectionObserver) {
        window.imageIntersectionObserver.disconnect()
        document.querySelectorAll('.pipe-content__reset img').forEach(function (data) {
            window.imageIntersectionObserver.observe(data)
        })
    } else {
        window.imageIntersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entrie) => {
                if ((typeof entrie.isIntersecting === 'undefined' ? entrie.intersectionRatio !== 0 : entrie.isIntersecting) && entrie.target.getAttribute('data-src')) {
                    loadImg(entrie.target)
                }
            })
        })
        document.querySelectorAll('.pipe-content__reset img').forEach(function (data) {
            window.imageIntersectionObserver.observe(data)
        })
    }
}
