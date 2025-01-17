export const vTooltip = {
  mounted(el, binding) {
    el.setAttribute('title', binding.value)
    el.style.position = 'relative'
    const tooltip = document.createElement('div')
    tooltip.textContent = binding.value

    tooltip.style.cssText = `
      position: absolute;
      background: #333;
      color: white;
      padding: 5px;
      border-radius: 3px;
      display: none;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
    `
    el.appendChild(tooltip)

    el.addEventListener('mouseenter', () => {
      tooltip.style.display = 'block'
    })
    el.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none'
    })
  },
}
