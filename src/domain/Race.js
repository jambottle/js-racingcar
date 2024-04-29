export default class Race {
  // 라운드 횟수
  static rounds = 5;

  // 자동차 목록
  #cars = [];

  constructor(cars) {
    this.#cars = cars;
  }

  // 라운드 시작
  initRound() {
    this.#cars.forEach(car => {
      // 전진 시도
      const randomValue = Math.floor(Math.random() * 10);
      car.move(randomValue);

      // 위치 출력
      console.log(`${car.name}: ${'-'.repeat(car.position)}`);
    });
  }

  // 경주 시작: 5라운드로 진행
  initRace() {
    console.log('🏁 자동차 경주를 시작합니다!');

    // 라운드별 진행
    for (let i = 0; i < Race.rounds; i++) {
      console.log(`\nRound ${i + 1})`);
      this.initRound();
    }
  }
}
