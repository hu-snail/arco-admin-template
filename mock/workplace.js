const imageList = [
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp'
];

const staticList = [
  {
    month: 'Jan',
    city: 'Tokyo',
    temperature: 7
  },
  {
    month: 'Jan',
    city: 'London',
    temperature: 3.9
  },
  {
    month: 'Feb',
    city: 'Tokyo',
    temperature: 13
  },
  {
    month: 'Feb',
    city: 'London',
    temperature: 4.2
  },
  {
    month: 'Mar',
    city: 'Tokyo',
    temperature: 16.5
  },
  {
    month: 'Mar',
    city: 'London',
    temperature: 5.7
  },
  {
    month: 'Apr',
    city: 'Tokyo',
    temperature: 14.5
  },
  {
    month: 'Apr',
    city: 'London',
    temperature: 8.5
  },
  {
    month: 'May',
    city: 'Tokyo',
    temperature: 10
  },
  {
    month: 'May',
    city: 'London',
    temperature: 11.9
  },
  {
    month: 'Jun',
    city: 'Tokyo',
    temperature: 7.5
  },
  {
    month: 'Jun',
    city: 'London',
    temperature: 15.2
  },
  {
    month: 'Jul',
    city: 'Tokyo',
    temperature: 9.2
  },
  {
    month: 'Jul',
    city: 'London',
    temperature: 17
  },
  {
    month: 'Aug',
    city: 'Tokyo',
    temperature: 14.5
  },
  {
    month: 'Aug',
    city: 'London',
    temperature: 16.6
  },
  {
    month: 'Sep',
    city: 'Tokyo',
    temperature: 9.3
  },
  {
    month: 'Sep',
    city: 'London',
    temperature: 14.2
  },
  {
    month: 'Oct',
    city: 'Tokyo',
    temperature: 8.3
  },
  {
    month: 'Oct',
    city: 'London',
    temperature: 10.3
  },
  {
    month: 'Nov',
    city: 'Tokyo',
    temperature: 8.9
  },
  {
    month: 'Nov',
    city: 'London',
    temperature: 5.6
  },
  {
    month: 'Dec',
    city: 'Tokyo',
    temperature: 5.6
  },
  {
    month: 'Dec',
    city: 'London',
    temperature: 9.8
  }
];

const commentList = [
  {
    id: 1,
    author: 'workplace.commennt.list.author.01',
    like: 13,
    star: 3,
    avatar:
      '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
    content: 'workplace.commennt.list.content.01',
    datetime: 'workplace.commennt.list.time.01'
  },
  {
    id: 2,
    author: 'workplace.commennt.list.author.02',
    like: 12,
    star: 1,
    avatar:
      '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp',
    content: 'workplace.commennt.list.content.02',
    datetime: 'workplace.commennt.list.time.02'
  },
  {
    id: 3,
    author: 'workplace.commennt.list.author.03',
    like: 12,
    star: 1,
    avatar:
      '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp',
    content: 'workplace.commennt.list.content.03',
    datetime: 'workplace.commennt.list.time.03'
  }
];

export default [
  {
    url: '/api/getWorkplace',
    type: 'get',
    response() {
      return {
        code: 200,
        msg: 'success',
        data: {
          imageList, staticList, commentList
        }
      };
    }
  }
];
