const users = [
  {
    id: 1,
    username: 'zaher',
    email: 'zaherabuamro@gmail.com',
    password: 'zaher123',
    roleId: 1,
    isVerified: true,
  },
  {
    id: 2,
    username: 'ibrahim',
    email: 'ibrahim.jarada@gmail.com',
    password: 'ibrahim123',
    roleId: 2,
    isVerified: true,
  },
  {
    id: 3,
    username: 'rand',
    email: 'rand@gmail.com',
    password: 'rand123',
    roleId: 3,
    isVerified: false,
  },
  {
    id: 4,
    username: 'ayman',
    email: 'ayman@gmail.com',
    password: 'ayman123',
    roleId: 4,
    isVerified: false,
  },
  {
    id: 5,
    username: 'admin',
    email: 'admin@gmail.com',
    password: 'admin123',
    roleId: 5,
    isVerified: true,
  },
];

const roles = [
  {
    id: 1,
    name: 'user',
  },
  {
    id: 2,
    name: 'user',
  },
  {
    id: 3,
    name: 'user',
  },
  {
    id: 4,
    name: 'user',
  },
  {
    id: 5,
    name: 'admin',
  },
];

const uploads = [
  {
    id: 1,
    userId: 1,
    title: 'upload 1',
    status: 'pending',
    s3VideoLink: 'https://s3.amazonaws.com/uploads-zaher/1.mp4',
    image1920x1080: 'https://s3.amazonaws.com/uploads-zaher/1.jpg',
    image1070x1585: 'https://s3.amazonaws.com/uploads-zaher/1.jpg',
    image1080x1920: 'https://s3.amazonaws.com/uploads-zaher/1.jpg',
    image1080x1080: 'https://s3.amazonaws.com/uploads-zaher/1.jpg',
    image3840x1080: 'https://s3.amazonaws.com/uploads-zaher/1.jpg',
  },
  {
    id: 2,
    userId: 1,
    title: 'upload 2',
    status: 'approved',
    s3VideoLink: 'https://s3.amazonaws.com/uploads-zaher/2.mp4',
    image1920x1080: 'https://s3.amazonaws.com/uploads-zaher/2.jpg',
    image1070x1585: 'https://s3.amazonaws.com/uploads-zaher/2.jpg',
    image1080x1920: 'https://s3.amazonaws.com/uploads-zaher/2.jpg',
    image1080x1080: 'https://s3.amazonaws.com/uploads-zaher/2.jpg',
    image3840x1080: 'https://s3.amazonaws.com/uploads-zaher/2.jpg',
  },
  {
    id: 3,
    userId: 1,
    title: 'upload 3',
    status: 'rejected',
    s3VideoLink: 'https://s3.amazonaws.com/uploads-zaher/3.mp4',
    image1920x1080: 'https://s3.amazonaws.com/uploads-zaher/3.jpg',
    image1070x1585: 'https://s3.amazonaws.com/uploads-zaher/3.jpg',
    image1080x1920: 'https://s3.amazonaws.com/uploads-zaher/3.jpg',
    image1080x1080: 'https://s3.amazonaws.com/uploads-zaher/3.jpg',
    image3840x1080: 'https://s3.amazonaws.com/uploads-zaher/3.jpg',

  },
  {
    id: 4,
    userId: 2,
    title: 'upload 4',
    status: 'pending',
    s3VideoLink: 'https://s3.amazonaws.com/uploads-ibrahim/4.mp4',
    image1920x1080: 'https://s3.amazonaws.com/uploads-ibrahim/4.jpg',
    image1070x1585: 'https://s3.amazonaws.com/uploads-ibrahim/4.jpg',
    image1080x1920: 'https://s3.amazonaws.com/uploads-ibrahim/4.jpg',
    image1080x1080: 'https://s3.amazonaws.com/uploads-ibrahim/4.jpg',
    image3840x1080: 'https://s3.amazonaws.com/uploads-ibrahim/4.jpg',
  },
  {
    id: 5,
    userId: 2,
    title: 'upload 5',
    status: 'approved',
    s3VideoLink: 'https://s3.amazonaws.com/uploads-ibrahim/5.mp4',
    image1920x1080: 'https://s3.amazonaws.com/uploads-ibrahim/5.jpg',
    image1070x1585: 'https://s3.amazonaws.com/uploads-ibrahim/5.jpg',
    image1080x1920: 'https://s3.amazonaws.com/uploads-ibrahim/5.jpg',
    image1080x1080: 'https://s3.amazonaws.com/uploads-ibrahim/5.jpg',
    image3840x1080: 'https://s3.amazonaws.com/uploads-ibrahim/5.jpg',

  },
  {
    id: 6,
    userId: 2,
    title: 'upload 6',
    status: 'rejected',
    s3VideoLink: 'https://s3.amazonaws.com/uploads-ibrahim/6.mp4',
    image1920x1080: 'https://s3.amazonaws.com/uploads-ibrahim/6.jpg',
    image1070x1585: 'https://s3.amazonaws.com/uploads-ibrahim/6.jpg',
    image1080x1920: 'https://s3.amazonaws.com/uploads-ibrahim/6.jpg',
    image1080x1080: 'https://s3.amazonaws.com/uploads-ibrahim/6.jpg',
    image3840x1080: 'https://s3.amazonaws.com/uploads-ibrahim/6.jpg',
  },
  {
    id: 7,
    userId: 3,
    title: 'upload 7',
    status: 'pending',
    s3VideoLink: 'https://s3.amazonaws.com/uploads-rand/7.mp4',
    image1920x1080: 'https://s3.amazonaws.com/uploads-rand/7.jpg',
    image1070x1585: 'https://s3.amazonaws.com/uploads-rand/7.jpg',
    image1080x1920: 'https://s3.amazonaws.com/uploads-rand/7.jpg',
    image1080x1080: 'https://s3.amazonaws.com/uploads-rand/7.jpg',
    image3840x1080: 'https://s3.amazonaws.com/uploads-rand/7.jpg',

  },
  {
    id: 8,
    userId: 3,
    title: 'upload 8',
    status: 'approved',
    s3VideoLink: 'https://s3.amazonaws.com/uploads-rand/8.mp4',
    image1920x1080: 'https://s3.amazonaws.com/uploads-rand/8.jpg',
    image1070x1585: 'https://s3.amazonaws.com/uploads-rand/8.jpg',
    image1080x1920: 'https://s3.amazonaws.com/uploads-rand/8.jpg',
    image1080x1080: 'https://s3.amazonaws.com/uploads-rand/8.jpg',
    image3840x1080: 'https://s3.amazonaws.com/uploads-rand/8.jpg',

  },
  {
    id: 9,
    userId: 3,
    title: 'upload 9',
    status: 'rejected',
    s3VideoLink: 'https://s3.amazonaws.com/uploads-rand/9.mp4',
    image1920x1080: 'https://s3.amazonaws.com/uploads-rand/9.jpg',
    image1070x1585: 'https://s3.amazonaws.com/uploads-rand/9.jpg',
    image1080x1920: 'https://s3.amazonaws.com/uploads-rand/9.jpg',
    image1080x1080: 'https://s3.amazonaws.com/uploads-rand/9.jpg',
    image3840x1080: 'https://s3.amazonaws.com/uploads-rand/9.jpg',
  },
];

const tags = [
  {
    id: 1,
    name: 'tag 1',
  },
  {
    id: 2,
    name: 'tag 2',
  },
  {
    id: 3,
    name: 'tag 3',
  },
  {
    id: 4,
    name: 'tag 4',
  },
  {
    id: 5,
    name: 'tag 5',
  },
  {
    id: 6,
    name: 'tag 6',
  },
  {
    id: 7,
    name: 'tag 7',
  },
  {
    id: 8,
    name: 'tag 8',
  },
  {
    id: 9,
    name: 'tag 9',
  },
  {
    id: 10,
    name: 'tag 10',
  },
];

const categories = [
  {
    id: 1,
    name: 'category 1',
  },
  {
    id: 2,
    name: 'category 2',
  },
  {
    id: 3,
    name: 'category 3',
  },
  {
    id: 4,
    name: 'category 4',
  },
  {
    id: 5,
    name: 'category 5',
  },
  {
    id: 6,
    name: 'category 6',
  },
  {
    id: 7,
    name: 'category 7',
  },
  {
    id: 8,
    name: 'category 8',
  },
  {
    id: 9,
    name: 'category 9',
  },
  {
    id: 10,
    name: 'category 10',
  },
];

const uploadsTags = [
  {
    uploadId: 1,
    tagId: 1,
  },
  {
    uploadId: 1,
    tagId: 2,
  },
  {
    uploadId: 2,
    tagId: 2,
  },
  {
    uploadId: 3,
    tagId: 3,
  },
  {
    uploadId: 3,
    tagId: 4,
  },
  {
    uploadId: 3,
    tagId: 5,
  },
  {
    uploadId: 4,
    tagId: 4,
  },
  {
    uploadId: 5,
    tagId: 5,
  },
  {
    uploadId: 6,
    tagId: 6,
  },
  {
    uploadId: 7,
    tagId: 7,
  },
  {
    uploadId: 8,
    tagId: 8,
  },
  {
    uploadId: 9,
    tagId: 9,
  },
];

const uploadsCategories = [
  {
    uploadId: 1,
    categoryId: 1,
  },
  {
    uploadId: 1,
    categoryId: 2,
  },
  {
    uploadId: 2,
    categoryId: 2,
  },
  {
    uploadId: 3,
    categoryId: 3,
  },
  {
    uploadId: 3,
    categoryId: 4,
  },
  {
    uploadId: 3,
    categoryId: 5,
  },
  {
    uploadId: 4,
    categoryId: 4,
  },
  {
    uploadId: 5,
    categoryId: 5,
  },
  {
    uploadId: 6,
    categoryId: 6,
  },
  {
    uploadId: 7,
    categoryId: 7,
  },
  {
    uploadId: 8,
    categoryId: 8,
  },
  {
    uploadId: 9,
    categoryId: 9,
  },
];

export {
  users,
  roles,
  uploads,
  tags,
  categories,
  uploadsTags,
  uploadsCategories,
};
