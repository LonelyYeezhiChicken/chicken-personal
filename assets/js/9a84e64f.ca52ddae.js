"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[6081],{49613:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>k});var t=r(59496);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=t.createContext({}),u=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=s,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return r?t.createElement(k,o(o({ref:n},p),{},{components:r})):t.createElement(k,o({ref:n},p))}));function k(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:s,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58192:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=r(88028),s=(r(59496),r(49613));const a={sidebar_position:35,description:"\u5efa\u7acb\u4e00\u500b\u65b0\u7684\u6a21\u7d44",key:["NestJS","Node","TypeScript"],tags:["NestJS","Node","TypeScript"]},o="\ud83d\udc69\u200d\ud83d\udcbb \u5efa\u7acb\u4e00\u500b\u65b0\u7684\u6a21\u7d44",l={unversionedId:"daylily/nestDaylily/createModul",id:"daylily/nestDaylily/createModul",title:"\ud83d\udc69\u200d\ud83d\udcbb \u5efa\u7acb\u4e00\u500b\u65b0\u7684\u6a21\u7d44",description:"\u5efa\u7acb\u4e00\u500b\u65b0\u7684\u6a21\u7d44",source:"@site/docs/daylily/nestDaylily/createModul.md",sourceDirName:"daylily/nestDaylily",slug:"/daylily/nestDaylily/createModul",permalink:"/docs/daylily/nestDaylily/createModul",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/nestDaylily/createModul.md",tags:[{label:"NestJS",permalink:"/docs/tags/nest-js"},{label:"Node",permalink:"/docs/tags/node"},{label:"TypeScript",permalink:"/docs/tags/type-script"}],version:"current",lastUpdatedAt:1699019226,formattedLastUpdatedAt:"2023\u5e7411\u67083\u65e5",sidebarPosition:35,frontMatter:{sidebar_position:35,description:"\u5efa\u7acb\u4e00\u500b\u65b0\u7684\u6a21\u7d44",key:["NestJS","Node","TypeScript"],tags:["NestJS","Node","TypeScript"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb Multi-stage Build",permalink:"/docs/daylily/nestDaylily/multiStageBuild"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb \u5c07 Service \u62bd\u8c61\u5316",permalink:"/docs/daylily/nestDaylily/cerateServiceInterface"}},i={},u=[{value:"\u76ee\u9304\u7d50\u69cb",id:"\u76ee\u9304\u7d50\u69cb",level:2},{value:"\u65b0\u5c08\u6848\u76ee\u9304\u7d50\u69cb",id:"\u65b0\u5c08\u6848\u76ee\u9304\u7d50\u69cb",level:3},{value:"\u5efa\u7acb\u8cc7\u6599\u593e",id:"\u5efa\u7acb\u8cc7\u6599\u593e",level:3},{value:"\u5efa\u7acb Dto",id:"\u5efa\u7acb-dto",level:3},{value:"\u5efa\u7acb Service",id:"\u5efa\u7acb-service",level:3},{value:"\u5efa\u7acb controller",id:"\u5efa\u7acb-controller",level:3},{value:"\u5efa\u7f6e module",id:"\u5efa\u7f6e-module",level:3},{value:"\u5c07 Module \u8a3b\u518a\u65bc app",id:"\u5c07-module-\u8a3b\u518a\u65bc-app",level:3}],p={toc:u},c="wrapper";function d(e){let{components:n,...r}=e;return(0,s.kt)(c,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-\u5efa\u7acb\u4e00\u500b\u65b0\u7684\u6a21\u7d44"},"\ud83d\udc69\u200d\ud83d\udcbb \u5efa\u7acb\u4e00\u500b\u65b0\u7684\u6a21\u7d44"),(0,s.kt)("h2",{id:"\u76ee\u9304\u7d50\u69cb"},"\u76ee\u9304\u7d50\u69cb"),(0,s.kt)("h3",{id:"\u65b0\u5c08\u6848\u76ee\u9304\u7d50\u69cb"},"\u65b0\u5c08\u6848\u76ee\u9304\u7d50\u69cb"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"src\n\u2514\u2500app.controller.spec.ts\n\u2502\n\u2514\u2500app.controller.ts\n\u2502\n\u2514\u2500app.module.ts\n\u2502\n\u2514\u2500app.service.ts\n\u2502\n\u2514\u2500main.ts\n")),(0,s.kt)("h3",{id:"\u5efa\u7acb\u8cc7\u6599\u593e"},"\u5efa\u7acb\u8cc7\u6599\u593e"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u5148\u5efa\u7acb\u4e00\u500b user \u7684\u8cc7\u6599\u593e")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"src\n\u2514\u2500user\n\u2502\n\u2514\u2500app.controller.spec.ts\n\u2502\n\u2514\u2500app.controller.ts\n\u2502\n\u2514\u2500app.module.ts\n\u2502\n\u2514\u2500app.service.ts\n\u2502\n\u2514\u2500main.ts\n")),(0,s.kt)("h3",{id:"\u5efa\u7acb-dto"},"\u5efa\u7acb Dto"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Dto \u7684\u5168\u540d\u70ba ",(0,s.kt)("inlineCode",{parentName:"p"},"data transfer object")),(0,s.kt)("p",{parentName:"blockquote"},"\u5b9a\u7fa9\u8cc7\u6599\u50b3\u8f38\u6642\u6703\u4f7f\u7528\u7684\u7269\u4ef6"),(0,s.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: Dto != Entity"),(0,s.kt)("p",{parentName:"blockquote"},"\u5148\u5b9a\u7fa9\u4e00\u500b\u4f7f\u7528\u8005\u7684 Dto"),(0,s.kt)("p",{parentName:"blockquote"},"\u9700\u5c07\u6bcf\u500b\u5c6c\u6027\u52a0\u4e0a ",(0,s.kt)("inlineCode",{parentName:"p"},"@ApiProperty()")," \u9019\u6a23 swagger \u624d\u6703\u986f\u793a"),(0,s.kt)("p",{parentName:"blockquote"},"\u4e26\u4e14\u53ef\u4ee5\u91dd\u5c0d data \u9032\u884c\u63cf\u8ff0\u8207\u9650\u5236")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u4e00\u500b dto \u7684\u76ee\u9304\uff0c\u4e26\u4e14\u5efa\u7acb\u4e00\u500b create-user.dto.ts \u7684\u6a94\u6848")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"user\n\u2514\u2500dto\n  \u2514\u2500create-user.dto.ts\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { ApiProperty } from '@nestjs/swagger';\n\nexport class CreateUserDto {\n  @ApiProperty({\n    description: '\u4f7f\u7528\u8005\u5168\u540d',\n  })\n  fullName: string;\n\n  @ApiProperty({\n    description: 'user email',\n  })\n  email: string;\n\n  @ApiProperty({\n    description: 'user password',\n  })\n  password: string;\n\n  @ApiProperty({\n    description: '\u96fb\u8a71\u865f\u78bc',\n  })\n  phoneNumber: string;\n\n  @ApiProperty({\n    description: '\u4f7f\u7528\u8005\u540d\u7a31',\n  })\n  userName: string;\n}\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u4e00\u500b update-user.dto.ts \u7684\u6a94\u6848")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"user\n\u2514\u2500dto\n  \u2514\u2500create-user.dto.ts\n  \u2502\n  \u2514\u2500update-user.dto.ts\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { ApiProperty } from '@nestjs/swagger';\n\nexport class UpdateUserDto {\n  @ApiProperty({\n    description: 'user id',\n  })\n  id: string;\n\n  @ApiProperty({\n    description: '\u4f7f\u7528\u8005\u5168\u540d',\n  })\n  fullName: string;\n\n  @ApiProperty({\n    description: 'user email',\n  })\n  email: string;\n\n  @ApiProperty({\n    description: '\u96fb\u8a71\u865f\u78bc',\n  })\n  phoneNumber: string;\n\n  @ApiProperty({\n    description: '\u4f7f\u7528\u8005\u540d\u7a31',\n  })\n  userName: string;\n}\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u4e00\u500b user.dto.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"user\n\u2514\u2500dto\n  \u2514\u2500create-user.dto.ts\n  \u2502\n  \u2514\u2500update-user.dto.ts\n  \u2502\n  \u2514\u2500user.dto.ts\n  \u2502\n  \u2514\u2500index.ts\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { ApiProperty } from \"@nestjs/swagger\";\n\nexport class UserDto {\n    @ApiProperty({\n      description: 'user id',\n    })\n    id: string;\n  \n    @ApiProperty({\n      description: '\u4f7f\u7528\u8005\u5168\u540d',\n    })\n    fullName: string;\n  \n    @ApiProperty({\n      description: 'user email',\n    })\n    email: string;\n  \n    @ApiProperty({\n      description: '\u96fb\u8a71\u865f\u78bc',\n    })\n    phoneNumber: string;\n  \n    @ApiProperty({\n      description: '\u4f7f\u7528\u8005\u540d\u7a31',\n    })\n    userName: string;\n  }\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u4e00\u500b index.ts \u7d71\u4e00\u5c07 class \u5f80\u4e0a\u5c64\u62cb")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"user\n\u2514\u2500dto\n  \u2514\u2500create-user.dto.ts\n  \u2502\n  \u2514\u2500update-user.dto.ts\n  \u2502\n  \u2514\u2500user.dto.ts\n  \u2502\n  \u2514\u2500index.ts\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'export * from "./create-user.dto"\nexport * from "./update-user.dto"\nexport * from "./user.dto"\n')),(0,s.kt)("h3",{id:"\u5efa\u7acb-service"},"\u5efa\u7acb Service"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u4e3b\u8981\u70ba\u5546\u696d\u908f\u8f2f\u5c64"),(0,s.kt)("p",{parentName:"blockquote"},"\u6240\u6709\u7684\u696d\u52d9\u908f\u8f2f\u90fd\u61c9\u8a72\u96c6\u4e2d\u5728\u9019\u4e00\u5c64")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5efa\u7acb user.service.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"user\n\u2514\u2500dto\n\u2502 \u2514\u2500create-user.dto.ts\n\u2502 \u2502\n\u2502 \u2514\u2500update-user.dto.ts\n\u2502 \u2502\n\u2502 \u2514\u2500uer.dto.ts\n\u2502 \u2502\n\u2502 \u2514\u2500index.ts\n\u2502\n\u2514\u2500user.service.ts\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { Injectable } from '@nestjs/common';\nimport { UpdateUserDto, CreateUserDto, UserDto } from './dto';\n\n@Injectable()\nexport class UserService {\n  /** \u4f7f\u7528 store id \u67e5\u51fa\u5e95\u4e0b\u6240\u6709\u7684\u4f7f\u7528\u8005\n   *\n   * @param storeId store id\n   * @returns user list\n   */\n  async getUserByStoreId(storeId: string): Promise<Array<UserDto>> {\n    let users = new Array<UserDto>();\n\n    users.push({\n      id: 'f7541155-a4ff-4ca2-bfc5-a82ad98e2e86',\n      fullName: 'Big Pig',\n      email: 'BigPig@local.com',\n      phoneNumber: '0900000000',\n      userName: 'pig pig',\n    });\n\n    users.push({\n      id: '80f78f75-37b5-4977-bffc-5afc5db99123',\n      fullName: 'Pink Chicken',\n      email: 'PinkChicken@local.com',\n      phoneNumber: '0900000011',\n      userName: 'Hi Chicken',\n    });\n    return users;\n  }\n\n  /** \u4f7f\u7528 user id \u67e5\u8a62\u4f7f\u7528\u8005\n   *\n   * @param id user id\n   * @returns user\n   */\n  async getUserById(id: string): Promise<UserDto> {\n    let user: UserDto = {\n      id: '80f78f75-37b5-4977-bffc-5afc5db99123',\n      fullName: 'Pink Chicken',\n      email: 'PinkChicken@local.com',\n      phoneNumber: '0900000011',\n      userName: 'Hi Chicken',\n    };\n\n    return user;\n  }\n  /** \u65b0\u589e\u4f7f\u7528\u8005\n   *\n   * @param newUser new user\n   * @returns new user list\n   */\n  async createUser(newUser: CreateUserDto): Promise<Array<UserDto>> {\n    let users = new Array<UserDto>();\n\n    users.push({\n      id: '591afd77-32d0-44c2-a487-b6bd8850a0fe',\n      fullName: newUser.fullName,\n      email: newUser.email,\n      phoneNumber: newUser.phoneNumber,\n      userName: newUser.userName,\n    });\n\n    users.push({\n      id: 'f7541155-a4ff-4ca2-bfc5-a82ad98e2e86',\n      fullName: 'Big Pig',\n      email: 'BigPig@local.com',\n      phoneNumber: '0900000000',\n      userName: 'pig pig',\n    });\n\n    users.push({\n      id: '80f78f75-37b5-4977-bffc-5afc5db99123',\n      fullName: 'Pink Chicken',\n      email: 'PinkChicken@local.com',\n      phoneNumber: '0900000011',\n      userName: 'Hi Chicken',\n    });\n    return users;\n  }\n\n  /**\u66f4\u65b0\u4f7f\u7528\u8005\n   *\n   * @param id user id\n   * @param oldUser edit user\n   * @returns user list\n   */\n  async updaterUser(\n    id: string,\n    oldUser: UpdateUserDto,\n  ): Promise<Array<UserDto>> {\n    let users = new Array<UserDto>();\n\n    users.push({\n      id: 'f7541155-a4ff-4ca2-bfc5-a82ad98e2e86',\n      fullName: oldUser.fullName,\n      email: oldUser.email,\n      phoneNumber: oldUser.phoneNumber,\n      userName: oldUser.fullName,\n    });\n\n    users.push({\n      id: '80f78f75-37b5-4977-bffc-5afc5db99123',\n      fullName: 'Pink Chicken',\n      email: 'PinkChicken@local.com',\n      phoneNumber: '0900000011',\n      userName: 'Hi Chicken',\n    });\n    return users;\n  }\n\n  /**\u522a\u9664\u4f7f\u7528\u8005\n   *\n   * @param id user id\n   * @returns user list\n   */\n  async deleteUser(id: string): Promise<Array<UserDto>> {\n    let users = new Array<UserDto>();\n\n    users.push({\n      id: '80f78f75-37b5-4977-bffc-5afc5db99123',\n      fullName: 'Pink Chicken',\n      email: 'PinkChicken@local.com',\n      phoneNumber: '0900000011',\n      userName: 'Hi Chicken',\n    });\n    return users;\n  }\n}\n")),(0,s.kt)("h3",{id:"\u5efa\u7acb-controller"},"\u5efa\u7acb controller"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u9019\u908a\u63a1\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"RESTful API")," \u98a8\u683c"),(0,s.kt)("p",{parentName:"blockquote"},"\u4e26\u4e14\u4f5c\u4e86\u589e\u522a\u67e5\u6539\u7684\u529f\u80fd")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5728 user \u8cc7\u6599\u593e\u5e95\u4e0b\u5efa\u7acb user.controller.ts \u6a94\u6848")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"user\n\u2514\u2500dto\n\u2502 \u2514\u2500create-user.dto.ts\n\u2502 \u2502\n\u2502 \u2514\u2500update-user.dto.ts\n\u2502 \u2502\n\u2502 \u2514\u2500user.dto.ts\n\u2502 \u2502\n\u2502 \u2514\u2500index.ts\n\u2502\n\u2514\u2500user.controller.ts\n\u2502\n\u2514\u2500user.service.ts\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u670d\u52d9\u6ce8\u5165")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"}," constructor(private readonly userService: UserService) {}\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6574\u9ad4\u7a0b\u5f0f\u78bc")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"import {\n  Controller,\n  Get,\n  Post,\n  Body,\n  Put,\n  Param,\n  Delete,\n} from '@nestjs/common';\nimport { UpdateUserDto, CreateUserDto, UserDto } from './dto';\nimport { UserService } from './user.service';\n\n@Controller('user')\nexport class UserController {\n  constructor(private readonly userService: UserService) {}\n\n  @Get(':storeId')\n  async findAll(@Param('id') storeId: string): Promise<Array<UserDto>> {\n    return await this.userService.getUserByStoreId(storeId);\n  }\n\n  @Get(':id')\n  async findOne(@Param('id') id: string): Promise<UserDto> {\n    return await this.userService.getUserById(id);\n  }\n\n  @Post()\n  async create(@Body() createCatDto: CreateUserDto) {\n    return await this.userService.createUser(createCatDto);\n  }\n\n  @Put(':id')\n  async update(@Param('id') id: string, @Body() updateCatDto: UpdateUserDto) {\n    return await this.userService.updaterUser(id, updateCatDto);\n  }\n\n  @Delete(':id')\n  async remove(@Param('id') id: string) {\n    return await this.userService.deleteUser(id);\n  }\n}\n")),(0,s.kt)("h3",{id:"\u5efa\u7f6e-module"},"\u5efa\u7f6e module"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u4e3b\u8981\u4f86\u7ba1\u7406 controller, service \u7684\u751f\u9031\u671f")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5efa\u7acb user.module.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"user\n\u2514\u2500dto\n\u2502 \u2514\u2500create-user.dto.ts\n\u2502 \u2502\n\u2502 \u2514\u2500update-user.dto.ts\n\u2502 \u2502\n\u2502 \u2514\u2500user.dto.ts\n\u2502 \u2502\n\u2502 \u2514\u2500index.ts\n\u2502\n\u2514\u2500user.controller.ts\n\u2502\n\u2514\u2500user.service.ts\n\u2502\n\u2514\u2500user.module.ts\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { Module } from '@nestjs/common';\nimport { UserController } from './user.controller';\nimport { UserService } from './user.service';\n\n@Module({\n  controllers: [UserController],\n  providers: [UserService],\n})\nexport class UserModule {}\n")),(0,s.kt)("h3",{id:"\u5c07-module-\u8a3b\u518a\u65bc-app"},"\u5c07 Module \u8a3b\u518a\u65bc app"),(0,s.kt)("p",null,"\u5230 app.module.ts \u52a0\u5165 user.module.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4,7}","{4,7}":!0},"import { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { UserModule } from './user/user.module';\n\n@Module({\n  imports: [UserModule],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n")))}d.isMDXComponent=!0}}]);