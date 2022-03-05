export function changeTitle (title) {
    let dom = document.querySelector('title')
    if (dom) {
      dom.innerText = title
    }
  }
  export function changeKeywords (title) {
    let dom = document.querySelectorAll('meta')[0]
    if (dom) {
      dom.setAttribute("content",title)
    }
  }
  export function changeDescription (title) {
    let dom = document.querySelectorAll('meta')[4]
    if (dom) {
      dom.setAttribute("content",title)
    }
  }