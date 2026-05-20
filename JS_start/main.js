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
  showOnlyCompleted: false,
  render() {
    // 1. delete previos view Очищает консоль — console.clear(), чтобы каждый раз видеть только актуальное состояние.
    // console.clear();
    // 2. Create view for current state Выводит текущие данные — console.log(this.getData()).
    // console.log(this.getLessons());
    const lessons = this.getLessons();
    view.createList(lessons);
  },
  createLesson(lessonTitle) {
    // 1. Change data immutable (создать новое состояние данных, новую версию)
    const newLesson = {
      id: 6, // id: 6 — пока захардкожен
      title: lessonTitle, // title: lessonTitle — берётся из аргумента
      isDone: false, // isDone: false — новый урок не выполнен
    };
    this.setState([...this.courseData.lessons, newLesson]); //[...] — разворачивает старый массив уроков // newLesson — добавляется в конец
  },
  deleteLesson(lessonId) {
    // 1. Change data immutable (создать новое состояние данных, новую версию)
    this.setState(
      this.courseData.lessons.filter(
        //filter создаёт новый массив, в который попадут только те элементы, у которых id !== lessonId.
        (el) => el.id !== lessonId,
      ),
    );
  },
  updateLessonStatus(lessonId) {
    //map создаёт новый массив. Для каждого урока l: // если l.id === lessonId: // создаётся новый объект: { ...l, isDone: !l.isDone }
    //...l — копия всех полей // isDone: !l.isDone — переворот статуса иначе: возвращается l как есть В итоге: все уроки те же
    // один — с перевёрнутым isDone // Новый массив передаётся в setState.
    // 1. Change data immutable (создать новое состояние данных, новую версию)
    this.setState(
      this.courseData.lessons.map((l) =>
        l.id === lessonId ? { ...l, isDone: !l.isDone } : l,
      ),
    );
  },
  setState(nextStatelessons) {
    if (this.courseData.lessons !== nextStatelessons) {
      // 1. Set next data to model
      this.courseData.lessons = nextStatelessons; // обновляет состояние: this.courseData.lessons = nextStatelessons
      // 2. Update view after change data
      this.render();
    } else {
      console.error("Data not changed!");
    }
  },
  getLessons() {
    if (this.showOnlyCompleted === false) {
      // если showOnlyCompleted === false → вернуть все уроки
      return this.courseData.lessons;
    } else {
      return this.courseData.lessons.filter((l) => l.isDone === true); //если true → вернуть только выполненные (isDone === true)
    }
  },
  toggleLessonFilter() {
    model.showOnlyCompleted = !model.showOnlyCompleted;
    this.render();
  },
};

//initialization:
// model.render();
//Вызывается model.render() // render вызывает getData // getData возвращает все уроки (так как showOnlyCompleted === false)
// В консоли ты видишь начальное состояние.

const view = {
  init() {
    const root = document.getElementById("root");
    root.append(
      this.createTitle(model.courseData.title),
      this.createAddLessonForm(),
      this.createLessonFilter(model.showOnlyCompleted),
      this.createList(model.getLessons()),
    );
  },
  createTitle(lessonTitle) {
    const title = document.createElement("h1");
    title.classList.add("title");
    title.setAttribute("id", "course-title");
    title.textContent = lessonTitle;
    return title;
  },
  createList(lessons) {
    if (lessons.length === 0) {
      const message = document.createElement("span");
      message.textContent = "Уроки отсутсвуют. Создайте первый.";
      return message;
    } else {
      const list = document.createElement("ul");
      list.classList.add("list");
      for (let i = 0; i < lessons.length; i++) {
        const item = this.createLesson(lessons[i]);
        list.append(item);
      }
      return list;
    }
  },
  createLesson(lesson) {
    const item = document.createElement("li");
    item.classList.add("item");
    item.textContent = lesson.title;
    if (lesson.isDone === true) {
      item.classList.add("done");
    }
    const delButton = document.createElement("button");
    delButton.textContent = "x";
    item.append(delButton);
    return item;
  },
  createLessonFilter(isCheked) {
    const label = document.createElement("label");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.checked = isCheked;
    label.textContent = "Показывать только выполненные";
    label.append(checkBox);
    return label;
  },
  createAddLessonForm() {
    const form = document.createElement("form");
    const input = document.createElement("input");
    const addButton = document.createElement("button");
    addButton.textContent = "+";
    form.append(input, addButton);
    return form;
  },
};

view.init();
