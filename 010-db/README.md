## Запросы MongoDB для вставки данных

```javascript
db.books.insertMany([
    {
        title: "Название книги 1",
        author: "Автор книги 1",
        description: "Описание книги 1",
    },
    {
        title: "Название книги 2",
        author: "Автор книги 2",
        description: "Описание книги 2",
    }
]);
```

### Запрос для поиска полей документов коллекции books по полю title

```javascript
db.books.find({ title: "Моя книга" });
```

### Запрос для редактирования полей документа по id

```javascript
db.books.updateOne(
    {_id: ObjectId("id")},
    {$set: {description: "Новое описание",  author: "Новый автор"}}
);
```