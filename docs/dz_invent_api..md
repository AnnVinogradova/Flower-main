Продумать API для итоговой работы и прислать текстовой файл с подпорным его описанием,
по каким путям какие методы что должны возвращать,
положить копию файла в репозиторий проекта.
Пример

| Объект БД                       | Путь                                      | Доступ       | Методы                 |
|---------------------------------|-------------------------------------------|--------------|------------------------|
| product                         | /api/public/product                       | Открытый     | GET, DELETE, POST, PUT |
| order                           | /api/restricted/order                     | Закрытый     | GET (только свои), POST|
| users                           | /api/admin/users                          | Админ        | GET, DELETE, POST, PUT |
| category                        | /api/public/category                      | Открытый     | GET, DELETE, POST, PUT |
| product/{id}                    | /api/public/product/{id}                  | Открытый     | GET                    |
| order/{id}                      | /api/restricted/order/{id}/status         | Закрытый     | PUT                    |
| order/status                    | /api/restricted/order/status/{status}     | Закрытый     | GET                    |
| order/users                     | /api/restricted/order/users/{usersid}     | Закрытый     | GET                    |
| users/{id}                      | /api/admin/users/{id}                     | Админ        | GET                    |
| product/category                | /api/public/product/category/category{id} | Открытый     | GET                    |
| product/filter                  | /api/public/product/filter                | Открытый     | GET                    |
| category/count                  | /api/public/category/count                | Открытый     | GET                    |
| users/role                      | /api/admin/users/role/{role}              | Админ        | GET                    |
| order/{id}/delivery             | /api/restricted/order/{id}/delivery       | Закрытый     | PUT                    |
| order/delivery                  | /api/restricted/order/delivery/{status}   | Закрытый     | GET                    |
| order/delivery                  | /api/restricted/order/delivery/date/{start}{end}                             |                                           | Закрытый     | GET                    |
| discount                        | /api/restricted/discount                  | Закрытый     | GET, DELETE, POST, PUT |
| payment                         | /api/restricted/payment-methods           | Закрытый     | GET, DELETE, POST, PUT |
| product                         | /api/restricted/product/review/{productid}| Закрытый     | GET, POST              |
| product                         | /api/restricted/wishlist/add/{productid}  | Закрытый     | GET, DELETE, POST      |
| product                         | /api/public/product/search                | Открытый     | GET                    | 