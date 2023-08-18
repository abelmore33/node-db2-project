// STRETCH
const cars = [
  {
    vin: "1234567891234567",
    make: "BMW",
    model: "M240i",
    mileage: 21,
    title: "clean",
    transmission: "automatic",
  },
];

exports.seed = function (knex) {
  return knex("cars")
    .truncate()
    .then(() => {
      return knex("cars").insert(cars);
    });
};
