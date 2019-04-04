// DOM树构造函数
function Element({tagName, props, children}) {
    if (!(this instanceof Element)) {
        return new Element({tagName, props, children})
    }
    this.tagName = tagName
    this.props = props || {}
    this.children = children || []
}

// 页面渲染函数
Element.prototype.render = function () {
    let el = document.createElement(this.tagName)
    for (let key in this.props) {
        el.setAttribute(key, this.props[key])
    }
    this.children.forEach(item => {
        let childEle
        if (item instanceof Element) {
            childEle = item.render()
        } else {
            // 当Children数组子项不再是构造函数Element的实例的时候，只是个单纯的字符串，已经遍历到最底层,则创建文本节点
            childEle = document.createTextNode(item)
        }
        el.appendChild(childEle)
    })
    return el
}

// 更新DOM节点,要将变化的节点更新到真实DOM中，得传入根节点root，真实的节点和虚拟节点树形结构得相同
function updateElement($root, newElem, oldElem, index = 0) {
    if (!oldElem) {
        // 如果没有旧节点，则渲染之前的节点，当做新的节点
        $root.appendChild(newElem.render())
    } else if (!newElem) {
        // 如果之前的节点没有了，则删除
        $root.removeChild($root.childNodes[index])
    } else if (changed(newElem, oldElem)) {
        if (typeof newElem === 'string') {
            $root.childNodes[index].textContent = newElem
        } else {
            $root.replaceChild(newElem.render(), $root.childNodes[index])
        }
    } else if (newElem.tagName) {
        // 如果父级节点没有变化的话，那么遍历children，执行更新
        for (let i = 0; i < newElem.children.length || i < oldElem.children.length; i++) {
            updateElement($root.childNodes[index], newElem.children[i], oldElem.children[i], i)
        }
    }
}

function changed(newEle, oldEle) {
    return (typeof newEle !== typeof oldEle) || (typeof newEle === 'string' && newEle !== oldEle)
}
