import { faker } from "@faker-js/faker";

interface User {
  _id: string;
  avatar: string;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  sex: "female" | "male";
  subscriptionTier: "free" | "basic" | "business";
  description: string
}

function createRandomUser(): User {
  return {
    _id: faker.datatype.uuid(),
    avatar: faker.image.people( 640,280, true),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    sex: faker.name.sexType(),
    subscriptionTier: faker.helpers.arrayElement(["free", "basic", "business"]),
    description: faker.random.words(10),


  };
}

export default createRandomUser;
