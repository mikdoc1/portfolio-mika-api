const mongoose = require('mongoose');

const data = {
  portfolios: [
    {
      _id: new mongoose.Types.ObjectId(),
      title: 'Job in Netcentric',
      userId: 'google-oauth2|106322693209926200762',
      company: 'Netcentric',
      companyWebsite: 'www.google.com',
      location: 'Spain, Barcelona',
      jobTitle: 'Engineer',
      description: 'Doing something, programing....',
      startDate: '01/01/2014',
      endDate: '01/01/2016',
    },
    {
      _id: new mongoose.Types.ObjectId(),
      userId: 'google-oauth2|106322693209926200762',
      title: 'Job in Siemens',
      company: 'Siemens',
      companyWebsite: 'www.google.com',
      location: 'Slovakia, Kosice',
      jobTitle: 'Software Engineer',
      description: 'Responsoble for parsing framework for JSON medical data.',
      startDate: '01/01/2011',
      endDate: '01/01/2013',
    },
    {
      _id: new mongoose.Types.ObjectId(),
      userId: 'google-oauth2|106322693209926200762',
      title: 'Work in USA',
      company: 'WhoKnows',
      companyWebsite: 'www.google.com',
      location: 'USA, Montana',
      jobTitle: 'Housekeeping',
      description: 'So much responsibility....Overloaaaaaad',
      startDate: '01/01/2010',
      endDate: '01/01/2011',
    },
  ],
  blogs: [
    {
      slug: 'my-first-blog',
      title: 'My First Blog',
      subTitle: 'It was chilly winter day...',
      content: '<p>Some very nice content</p>',
      userId: 'google-oauth2|105214801625087493385',
      status: 'published',
    },
    {
      slug: 'my-second-blog',
      title: 'My Second Blog',
      subTitle: 'It was hot summer day...',
      content: '<p>Some very nice content</p>',
      userId: 'google-oauth2|105214801625087493385',
      status: 'published',
    },
    {
      slug: 'my-third-blog',
      title: 'My Third Blog',
      subTitle: 'It was rainy spring day...',
      content: '<p>Some very nice content</p>',
      userId: 'google-oauth2|105214801625087493385',
      status: 'published',
    },
  ],
};

module.exports = data;
