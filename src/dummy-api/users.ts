export const users = [
  {
    userId: "u1",
    email: "example@test.com",
    pwd: "123",
    dateOfBirth: "02.05.1995",
    tel: "0546465465",
    fullName: "Adam Smith",
    role: "user",
    pastAppointments: [],
  },
  {
    userId: "u2",
    email: "example@test.com",
    pwd: "123",
    dateOfBirth: "02.05.1995",
    tel: "0546465465",
    fullName: "Adam Smith",
    role: "user",
    pastAppointments: [],
  },
  {
    userId: "u3",
    email: "example@test.com",
    pwd: "123",
    dateOfBirth: "02.05.1995",
    tel: "0546465465",
    fullName: "Adam Smith",
    role: "user",
    pastAppointments: [],
  },
  {
    userId: "u4",
    email: "example@test.com",
    pwd: "123",
    dateOfBirth: "02.05.1995",
    tel: "0546465465",
    fullName: "Adam Smith",
    role: "user",
    pastAppointments: [],
  },
  {
    userId: "u5",
    email: "example@test.com",
    pwd: "123",
    dateOfBirth: "02.05.1995",
    tel: "0546465465",
    fullName: "Adam Smith",
    role: "user",
    pastAppointments: [],
  },
  {
    userId: "u6",
    email: "example@test.com",
    pwd: "123",
    dateOfBirth: "02.05.1995",
    tel: "0546465465",
    fullName: "Adam Smith",
    role: "user",
    pastAppointments: [],
  },
  {
    userId: "u7",
    email: "example@test.com",
    pwd: "123",
    dateOfBirth: "02.05.1995",
    tel: "0546465465",
    fullName: "Adam Smith",
    role: "user",
    pastAppointments: [],
  },
  {
    userId: "u8",
    email: "example@test.com",
    pwd: "123",
    dateOfBirth: "02.05.1995",
    tel: "0546465465",
    fullName: "Adam Smith",
    role: "user",
    pastAppointments: [],
  },
  {
    userId: "u9",
    email: "example@test.com",
    pwd: "123",
    dateOfBirth: "02.05.1995",
    tel: "0546465465",
    fullName: "Adam Smith",
    role: "user",
    pastAppointments: [],
  },
  {
    userId: "u10",
    email: "example@test.com",
    pwd: "123",
    dateOfBirth: "02.05.1995",
    tel: "0546465465",
    fullName: "Adam Smith",
    role: "user",
    pastAppointments: [],
  },
];

export function findUser(id: string) {
  let index = users.findIndex((user) => {
    return user.userId === id;
  });

  return users[index];
}

export function getUsersPage(pageIndex: number) {
  let index = pageIndex * 5;

  const slice = users.slice(index, index + 4);

  return slice;
}
