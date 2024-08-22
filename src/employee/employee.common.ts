export class Projections {
  static simpleEmployeeFindProjection() {
    return {
      name: true,
      email: true,
    };
  }
}
