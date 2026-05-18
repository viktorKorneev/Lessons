//create
//read
//update
//delete

const model = {
  courseData: {
    title: 'Фронт с "нуля"',
    lessons: [
      { id: 1, title: "Переменные", isDone: true },
      { id: 2, title: "Операторы", isDone: false },
      { id: 3, title: "Массивы", isDone: false },
      { id: 4, title: "Функции", isDone: false },
      { id: 5, title: "Объекты", isDone: false },
    ],
  },
  render() {
    // 1. delete previos view
    console.clear();
    // 2. Create view for current state
    console.log(this.courseData);
  },
  createLesson(lessonTitle) {
    // 1. Change data immutable (создать новое состояние данных, новую версию)
    const newLesson = {
      id: 6,
      title: lessonTitle,
      isDone: false,
    };
    const nextStatelessons = [...this.courseData.lessons, newLesson];
    this.setState(nextStatelessons);
  },
  deleteLesson(lessonId) {
    // 1. Change data immutable (создать новое состояние данных, новую версию)
    const nextStatelessons = this.courseData.lessons.filter(
      (el) => el.id !== lessonId,
    );
    this.setState(nextStatelessons);
  },
  updateLessonStatus(lessonId) {
    // 1. Change data immutable (создать новое состояние данных, новую версию)
    const nextStatelessons = [...this.courseData.lessons];
    const lesson = nextStatelessons.find((l) => l.id === lessonId);
    lesson.isDone = !lessonId.isDone;
    this.setState(nextStatelessons);
  },
  setState(nextStatelessons) {
    if (this.courseData.lessons !== nextStatelessons) {
      // 1. Set next data to model
      this.courseData.lessons = nextStatelessons;
      // 2. Update view after change data
      this.render();
    } else {
      console.error("Data not changed!")
    }
  },
};

//initialization:
model.render();
