// function customRender(reactElement, container){
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)
//     container.appendChild(domElement)
// }
//     // */
//     // here the function works for reactElement below to work as React.

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'

// }
// const mainContainer = document.querySelector('#root')
// customRender(reactElement,mainContainer)
// function appRender(domElem,App){
//     const Elem=document.createElement(domElem.type)
//     Elem.innerHTML=domElem.children
//     Elem.setAttribute('href', domElem.prop.href)
//     Elem.setAttribute('tartget', domElem.prop.target)
//     App.appendChild(Elem)
// } 

function appRender(domElem,App){
    const newElement=document.createElement(domElem.type)
    newElement.innerHTML=domElem.children
    for (const prop in domElem.props) {
        if (prop === 'children') continue; 
        newElement.setAttribute(prop, domElem.props[prop])
    }
    App.appendChild(newElement)
}
const domElem={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blanck'
    },
    children:'test text with prop of < a > tag',
    
}

const App=document.querySelector('#root')
appRender(domElem, App)