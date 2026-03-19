---
sidebar_position: 60
description: 單元測試 mock
key: [NestJS, Node, TypeScript, Unit test]
tags: [NestJS, Node, TypeScript, Unit test]
---

# 👩‍💻  單元測試 mock

## 關於 mock

> 單元測試中難免需要做到資料隔離，確保我每次執行都保持一致的結果
>
> mock 就是不屬於這個測試範圍外的服務，進行虛擬化

## 進行邏輯測試

- 目前目錄結構

```text
src
└─user
│
└─uuid
│
└─error-check
│
└─clock
│
└─app.controller.spec.ts
│
└─app.controller.ts
│
└─app.module.ts
│
└─app.service.ts
│
└─main.ts
```

- 目前 user 資料夾目錄結構

```text
user
└─dto
│ └─create-user.dto.ts
│ │
│ └─update-user.dto.ts
│ │
│ └─user.dto.ts
│ │
│ └─index.ts
│
└─interface
│ └─user.service.interface.ts
│
└─user.controller.ts
│
└─user.service.ts
│
└─user.module.ts
```

### 拆分邏輯層與資料層

- 新增 user.repository.ts 與 user.repository.interface.ts

```text {7,13}
user
└─dto
│
└─interface
│ └─user.service.interface.ts
│ │
│ └─user.repository.interface.ts
│
└─user.controller.ts
│
└─user.service.ts
│
└─user.repository.ts
│
└─user.module.ts
```

- 先定義 介面

```ts
import { UpdateUserDto, CreateUserDto, UserDto } from '../dto';


export interface UserRepositoryInterface {
  /** 使用 store id 查出底下所有的使用者
   *
   * @param storeId store id
   * @returns user list
   */
  getByStoreId(storeId: string): Promise<Array<UserDto>>;

  /** 使用 user id 查詢使用者
   *
   * @param id user id
   * @returns user
   */
  getById(id: string): Promise<UserDto>;

  /** 新增使用者
   *
   * @param newUser new user
   * @param userId update user id
   * @returns new user list
   */
  createUser(newUser: CreateUserDto, userId: string): Promise<Array<UserDto>>;

  /**更新使用者
   *
   * @param id user id
   * @param oldUser edit user
   * @param userId update user id
   * @returns user list
   */
  updaterUser(
    id: string,
    oldUser: UpdateUserDto,
    userId: string,
  ): Promise<Array<UserDto>>;

  /**刪除使用者
   *
   * @param id user id
   * @returns user list
   */
  deleteUser(id: string): Promise<Array<UserDto>>;
}
```

### 註冊 repository

- user.module.ts

```ts {13-16}
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'UserServiceInterface',
      useClass: UserService,
    },
    {
      provide: 'UserRepositoryInterface',
      useClass: UserRepository,
    },
  ],
})
export class UserModule {}
```

## 先寫測試

### 測試前置

> 宣告會用到的服務

:::caution
`import { ErrorCheckModule } from '../error-check/error-check.module';`

由於路徑並沒有跟 `user.service.spec.ts` 同一層，因此需要使用 `../` 否則測試運行時會吃不到檔案
:::

```ts
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserDto } from './dto';
import { ErrorCheckModule } from '../error-check/error-check.module';

describe('UserService', () => {
  let userService: UserService;
  let users: Array<UserDto>;
});
```

### 進行模組註冊

> 將有用到的外部服務 `ErrorCheckModule`, `UserRepository` 進行註冊

:::caution
`UserRepositoryInterface` 需要使用 `useValue` 來為這個介面提供假物件
:::

```ts
/** 上略 */

describe('UserService', () => {
  let userService: UserService;
  let userRepository: UserRepositoryInterface;
  let errorCheckService: ErrorCheckServiceInterface;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[ErrorCheckModule],
      providers: [
        UserService,
        {
          provide: 'UserRepositoryInterface',
          useValue: {
            // 在這裡模擬 UserRepositoryInterface 的方法
            getByStoreId: jest.fn(),
            getById: jest.fn(),
            createUser: jest.fn(),
            updaterUser: jest.fn(),
            deleteUser: jest.fn(),
          },
        }
      ],
    }).compile();
  });
});
```

### 實例化服務

> 將服務從 IOC 中取出，並賦值給物件

```ts
/** 上略 */

describe('UserService', () => {
  let userService: UserService;
  let userRepository: UserRepositoryInterface;
  let errorCheckService: ErrorCheckServiceInterface;
  let users: Array<UserDto>;

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      imports:[ErrorCheckModule],
      providers: [
        UserService,
        {
          provide: 'UserRepositoryInterface',
          useValue: {
            // 在這裡模擬 UserRepositoryInterface 的方法
            getByStoreId: jest.fn(),
            getById: jest.fn(),
            createUser: jest.fn(),
            updaterUser: jest.fn(),
            deleteUser: jest.fn(),
          },
        }
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });
});
```

### 傳寫測試用假物件與資料

> 將服務從 IOC 中取出，並賦值給物件

```ts
/** 上略 */

describe('UserService', () => {
  let userService: UserService;
  let users: Array<UserDto>;

  beforeEach(async () => {

    users = new Array<UserDto>();
    users.push({
      id: 'f7541155-a4ff-4ca2-bfc5-a82ad98e2e86',
      fullName: 'Big Pig',
      email: 'BigPig@local.com',
      phoneNumber: '0900000000',
      userName: 'pig pig',
    });

    users.push({
      id: '80f78f75-37b5-4977-bffc-5afc5db99123',
      fullName: 'Pink Chicken',
      email: 'PinkChicken@local.com',
      phoneNumber: '0900000011',
      userName: 'Hi Chicken',
    });

    const module: TestingModule = await Test.createTestingModule({
      imports:[ErrorCheckModule],
      providers: [
        UserService,
        {
          provide: 'UserRepositoryInterface',
          useValue: {
            // 在這裡模擬 UserRepositoryInterface 的方法
            getByStoreId: jest.fn((storeId) => {
              // 在這裡模擬 getByStoreId 方法的行為
              if (storeId === 'validStoreId') {
                return Promise.resolve(users);
              } else {
                return Promise.resolve([]); // 返回一個空陣列作為模擬
              }
            }),
            getById: jest.fn((id) => {
              return Promise.resolve(users.find((x) => x.id === id));
            }),
            createUser: jest.fn((newUser, userId) => {
              users.push({
                id: '99999999-37b5-4977-bffc-5afc5db99123',
                fullName: newUser.fullName,
                email: newUser.email,
                phoneNumber: newUser.phoneNumber,
                userName: newUser.userName,
              });
              return Promise.resolve(users);
            }),
            updaterUser: jest.fn((id, oldUser, userId) => {
              let data = users.find((x) => x.id === id);
              data.fullName = oldUser.fullName;
              data.email = oldUser.email;
              data.phoneNumber = oldUser.phoneNumber;
              data.userName = oldUser.userName;
              return Promise.resolve(users);
            }),
            deleteUser: jest.fn((id) => {
              users = users.filter((x) => x, id !== id);
              return Promise.resolve(users);
            }),
          },
        }
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });
});
```

## 撰寫測試劇情

### 需求: 取得商店使用者

> 需求: 我需要透過商店 id 來取得，屬於這家店的使用者
>
> > 測試劇情1 : 傳入正確的商店 id，就可以得到屬於這家店的使用者
> >
> > 測試劇情2 : 傳入不存在的商店 id，會得到一個空陣列
> >
> > 測試劇情3 : 傳入空的字串，會跳出例外
> >
> > 測試劇情4 : 傳入空的字串，會跳出例外

```ts
   describe('getUserByStoreId', () => {
    // case1
    it('store id is validStoreId, return users list', async () => {
      const storeId = 'validStoreId';

      const actual = await userService.getUserByStoreId(storeId);

      expect(actual).toStrictEqual(users);
    });

    // case2
    it('store id is store123, return []', async () => {
      const storeId = 'store123';

      const actual = await userService.getUserByStoreId(storeId);

      expect(actual).toStrictEqual([]);
    });

    // case3
    it("store id is '', throw exception data cant not empty", async () => {
      const storeId = '';

      const expectedError = new Error('storeId,資料不能為空或未定義');

      await expect(
        async () => await userService.getUserByStoreId(storeId),
      ).rejects.toThrow(expectedError);
    });

    // case4
    it('store id is undefined, throw exception data is undefined', async () => {
      const storeId = undefined;

      const expectedError = new Error('storeId,資料未定義');

      await expect(
        async () => await userService.getUserByStoreId(storeId),
      ).rejects.toThrow(expectedError);
    });
  });
```

### 測試細節

- `toStrictEqual` : 用來比對陣列，是否符合預期
- 測試例外
  - 先定義例外的訊息會回傳什麼
  - 接下來執行斷言
  - `toThrow` : 用來比對例外訊息是否為預期結果

:::caution
測試過程要注意非同步的問題，如果是非同步執行，需要進行 `await`
:::

```ts
 const expectedError = new Error('storeId,資料不能為空或未定義');

 await expect(
   async () => await userService.getUserByStoreId(storeId),
 ).rejects.toThrow(expectedError);
```

:::caution
為什麼測試例外的 `expect(async () =>{...})` 需要用到箭頭函式呢?

主要的原因在於，會需要用到物件本身的 ref ，才不會導致 `this` 指向 `caller`
:::

### 執行測試

```shell
pnpm test:watch src/user/user.service.spec.ts
```

### 測試結果

```shell
 PASS  src/user/user.service.spec.ts                                                                                                                                                                                  
  UserService
    √ should be defined (28 ms)                                                                                                                                                                                       
    getUserByStoreId                                                                                                                                                                                                  
      √ store id is validStoreId, return users list (8 ms)                                                                                                                                                            
      √ store id is store123, return [] (3 ms)                                                                                                                                                                        
      √ store id is '', throw exception data cant not empty (15 ms)                                                                                                                                                   
      √ store id is undefined, throw exception data is undefined (4 ms)                                                                                                                                               
                                                                                                                                                                                                                      
Waiting for the debugger to disconnect...                                                                                                                                                                             
Waiting for the debugger to disconnect...                                                                                                                                                                             
Waiting for the debugger to disconnect...
Waiting for the debugger to disconnect...                                                                                                                                                                             
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        5.932 s, estimated 11 s
```

---

## 完整測試程式碼

```ts
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserDto } from './dto';
import { ErrorCheckModule } from '../error-check/error-check.module';

describe('UserService', () => {
  let userService: UserService;
  let users: Array<UserDto>;

  beforeEach(async () => {
    users = new Array<UserDto>();
    users.push({
      id: 'f7541155-a4ff-4ca2-bfc5-a82ad98e2e86',
      fullName: 'Big Pig',
      email: 'BigPig@local.com',
      phoneNumber: '0900000000',
      userName: 'pig pig',
    });

    users.push({
      id: '80f78f75-37b5-4977-bffc-5afc5db99123',
      fullName: 'Pink Chicken',
      email: 'PinkChicken@local.com',
      phoneNumber: '0900000011',
      userName: 'Hi Chicken',
    });

    const module: TestingModule = await Test.createTestingModule({
      imports: [ErrorCheckModule],
      providers: [
        UserService,
        {
          provide: 'UserRepositoryInterface',
          useValue: {
            // 在這裡模擬 UserRepositoryInterface 的方法
            getByStoreId: jest.fn((storeId) => {
              // 在這裡模擬 getByStoreId 方法的行為
              if (storeId === 'validStoreId') {
                return Promise.resolve(users);
              } else {
                return Promise.resolve([]); // 返回一個空陣列作為模擬
              }
            }),
            getById: jest.fn((id) => {
              return Promise.resolve(users.find((x) => x.id === id));
            }),
            createUser: jest.fn((newUser, userId) => {
              users.push({
                id: '99999999-37b5-4977-bffc-5afc5db99123',
                fullName: newUser.fullName,
                email: newUser.email,
                phoneNumber: newUser.phoneNumber,
                userName: newUser.userName,
              });
              return Promise.resolve(users);
            }),
            updaterUser: jest.fn((id, oldUser, userId) => {
              const data = users.find((x) => x.id === id);
              data.fullName = oldUser.fullName;
              data.email = oldUser.email;
              data.phoneNumber = oldUser.phoneNumber;
              data.userName = oldUser.userName;
              return Promise.resolve(users);
            }),
            deleteUser: jest.fn((id) => {
              users = users.filter((x) => x, id !== id);
              return Promise.resolve(users);
            }),
          },
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('getUserByStoreId', () => {
    // case1
    it('store id is validStoreId, return users list', async () => {
      const storeId = 'validStoreId';

      const actual = await userService.getUserByStoreId(storeId);

      expect(actual).toStrictEqual(users);
    });

    // case2
    it('store id is store123, return []', async () => {
      const storeId = 'store123';

      const actual = await userService.getUserByStoreId(storeId);

      expect(actual).toStrictEqual([]);
    });

    // case3
    it("store id is '', throw exception data cant not empty", async () => {
      const storeId = '';

      const expectedError = new Error('storeId,資料不能為空或未定義');

      await expect(
        async () => await userService.getUserByStoreId(storeId),
      ).rejects.toThrow(expectedError);
    });

    // case4
    it('store id is undefined, throw exception data is undefined', async () => {
      const storeId = undefined;

      const expectedError = new Error('storeId,資料未定義');

      await expect(
        async () => await userService.getUserByStoreId(storeId),
      ).rejects.toThrow(expectedError);
    });
  });
});
```

---

## REF

梁大哥教學
