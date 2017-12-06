export const formatDate = (date) => {
  const monthNames = [
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
    '十',
    '十一',
    '十二',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${ year }年 ${ monthNames[monthIndex] }月 ${ day }日 `;
}
