export const dateFormatterPlugin = {
  install: (app, options) => {
    const formatDate = (date, formatString) => {
      const d = new Date(date)

      const pad = (n) => n.toString().padStart(2, '0')

      const formats = {
        yyyy: d.getFullYear(),
        MM: pad(d.getMonth() + 1),
        dd: pad(d.getDate()),
        HH: pad(d.getHours()),
        mm: pad(d.getMinutes()),
        ss: pad(d.getSeconds()),
      }

      return (formatString || 'yyyy-MM-dd').replace(
        /yyyy|MM|dd|HH|mm|ss/g,
        (match) => formats[match]
      )
    }

    app.provide('formatDate', formatDate)
    app.config.globalProperties.$formatDate = formatDate
  },
}
