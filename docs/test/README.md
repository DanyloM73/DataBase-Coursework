# Тестування працездатності системи

## Початкове наповнення таблиць

- User

<p align="center">
    <img src="./resources/user-table.png">
</p>

- Role

<p align="center">
    <img src="./resources/role-table.png">
</p>

- Request

<p align="center">
    <img src="./resources/request-table.png">
</p>

- Origin

<p align="center">
    <img src="./resources/origin-table.png">
</p>

- Media

<p align="center">
    <img src="./resources/media-table.png">
</p>

- Grant

<p align="center">
    <img src="./resources/grant-table.png">
</p>

## Робота з таблицею User

### Отримати всіх користувачів

<p align="center">
    <img src="./resources/get-all-users.png">
</p>

### Отримати користувача за його id

<p align="center">
    <img src="./resources/get-user-by-id.png">
</p>

### Додати нового користувача

<p align="center">
    <img src="./resources/add-user.png">
</p>

**В результаті до таблиці було додано новий запис:**

<p align="center">
    <img src="./resources/add-user-result.png">
</p>

**Якщо намагаємося додати до таблиці користувача з уже зареєстрованою елктронною поштою, отримуємо помилку:**

<p align="center">
    <img src="./resources/add-user-error.png">
</p>

### Видалити користувача за його id

<p align="center">
    <img src="./resources/delete-user.png">
</p>

**В результаті з таблиці було видалено відповідний запис:**

<p align="center">
    <img src="./resources/delete-user-result.png">
</p>

**Якщо намагаємося видалити уже не існуючого користувача, отримуємо помилку:**

<p align="center">
    <img src="./resources/delete-user-error.png">
</p>

### Змінити користувачу роль

<p align="center">
    <img src="./resources/change-user-role.png">
</p>

**В результаті роль у відповідного користувача змінилась:**

<p align="center">
    <img src="./resources/change-user-role-result.png">
</p>

## Робота з таблицею Media

### Додати новий медіа-контент

<p align="center">
    <img src="./resources/add-media.png">
</p>

**В результаті до таблиці було додано новий запис:**

<p align="center">
    <img src="./resources/add-media-result.png">
</p>

**Якщо намагаємося додати до таблиці медіа-контент з уже існуючим посиланням, отримуємо помилку:**

<p align="center">
    <img src="./resources/add-media-error.png">
</p>

### Здійснити пошук серез існуючих медіа-контентів за ключовим словом

<p align="center">
    <img src="./resources/search-media.png">
</p>

### Видалити медіа-контент за його id

<p align="center">
    <img src="./resources/delete-media.png">
</p>

**В результаті з таблиці було видалено відповідний запис:**

<p align="center">
    <img src="./resources/delete-media-result.png">
</p>

**Якщо намагаємося видалити уже не існуючий медіа-контент, отримуємо помилку:**

<p align="center">
    <img src="./resources/delete-media-error.png">
</p>

## Робота з таблицею Origin

### Додати першоджерело

<p align="center">
    <img src="./resources/add-origin.png">
</p>

**В результаті до таблиці було додано новий запис:**

<p align="center">
    <img src="./resources/add-origin-result.png">
</p>

**Якщо намагаємося додати до таблиці першоджерело з уже існуючим ім'ям, отримуємо помилку:**

<p align="center">
    <img src="./resources/add-origin-error.png">
</p>

### Видалити першоджерело за його id

<p align="center">
    <img src="./resources/delete-origin.png">
</p>

**В результаті з таблиці було видалено відповідний запис:**

<p align="center">
    <img src="./resources/delete-origin-result.png">
</p>

**Якщо намагаємося видалити уже не існуюче першоджерело, отримуємо помилку:**

<p align="center">
    <img src="./resources/delete-origin-error.png">
</p>

## Робота з таблицею Role

### Додати роль

<p align="center">
    <img src="./resources/add-role.png">
</p>

**В результаті до таблиці було додано новий запис:**

<p align="center">
    <img src="./resources/add-role-result.png">
</p>

**Якщо намагаємося додати до таблиці роль з уже існуючою назвою, отримуємо помилку:**

<p align="center">
    <img src="./resources/add-role-error.png">
</p>

### Додати до ролі нові права

<p align="center">
    <img src="./resources/add-grant-to-role.png">
</p>

**В результаті до поля grants відповідного рядка додано потрібний id дозволу:**

<p align="center">
    <img src="./resources/add-grant-to-role-result.png">
</p>

**Якщо намагаємося додати вже додане право, отримуємо помилку:**

<p align="center">
    <img src="./resources/add-grant-to-role-error.png">
</p>

### Видалити роль за її id

<p align="center">
    <img src="./resources/delete-role.png">
</p>

**В результаті з таблиці було видалено відповідний запис:**

<p align="center">
    <img src="./resources/delete-role-result.png">
</p>

**Якщо намагаємося видалити уже не існуючу роль, отримуємо помилку:**

<p align="center">
    <img src="./resources/delete-role-error.png">
</p>

## Робота з таблицею Request

### Додати новий запит

<p align="center">
    <img src="./resources/add-request.png">
</p>

**В результаті до таблиці було додано новий запис:**

<p align="center">
    <img src="./resources/add-request-result.png">
</p>

**Якщо намагаємося додати до таблиці запит з уже існуючим user id, отримуємо помилку:**

<p align="center">
    <img src="./resources/add-request-error.png">
</p>

### Отримати медіа-контент за запитом

<p align="center">
    <img src="./resources/get-media-by-request.png">
</p>

### Видалити запит за його id

<p align="center">
    <img src="./resources/delete-request.png">
</p>

**В результаті з таблиці було видалено відповідний запис:**

<p align="center">
    <img src="./resources/delete-request-result.png">
</p>

**Якщо намагаємося видалити уже не існуючий запит, отримуємо помилку:**

<p align="center">
    <img src="./resources/delete-request-error.png">
</p>