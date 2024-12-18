export const sideBarLinks = [
  {
    icon: 'home-icon.svg',
    routeName: '',
    path: '/',
  },
  {
    icon: 'chat-icon.svg',
    routeName: '',
    path: '/chat',
  },
  {
    icon: 'people.svg',
    routeName: '',
    path: '/group',
  },
];

export const topBarItems = [
  {
    icon: 'pie.svg',
    routeName: 'Summary',
    path: '',
  },
  {
    icon: 'sales.svg',
    routeName: 'Sales',
    path: '',
  },
  {
    icon: 'chat-tear.svg',
    routeName: 'Chats',
    path: '',
  },
];

export const statisticsSummary = [
  {
    icon: 'gray-chat.svg',
    name: 'Consultations',
    value: '24',
    increase: 15,
  },
  { icon: 'tag.svg', name: 'ORDERS PLACED', value: '12', decrease: 15 },
  { icon: 'check.svg', name: 'CONVERSION', value: '50%', decrease: 15 },
  {
    icon: 'coin.svg',
    name: 'TOTAL SALES VALUE',
    value: '$2,400',
    increase: 15,
  },
  { icon: 'coin2.svg', name: 'AVG ORDER VALUE', value: '$240', increase: 15 },
  { icon: 'piggy.svg', name: 'COMMISSION PAID', value: '$240', increase: 15 },
];

export const weeklyData = [
  {
    period: 'Last week',
    consultations: 13,
    ordersClosed: 9,
  },
  {
    period: 'This week',
    consultations: 20,
    ordersClosed: 14,
  },
];
export const consultationData = [
  { day: 'Mon', incoming: 32, answered: 28, expertsOnline: 25 },
  { day: 'Tue', incoming: 35, answered: 25, expertsOnline: 24 },
  { day: 'Wed', incoming: 40, answered: 32, expertsOnline: 30 },
  { day: 'Thu', incoming: 45, answered: 44, expertsOnline: 52 },
  { day: 'Fri', incoming: 48, answered: 35, expertsOnline: 30 },
  { day: 'Sat', incoming: 50, answered: 34, expertsOnline: 35 },
  { day: 'Sun', incoming: 52, answered: 37, expertsOnline: 35 },
];
