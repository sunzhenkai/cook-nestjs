import { Injectable } from '@nestjs/common';

/* 
基础类型
1. string
2. number
3. boolean

容器
1. Array 数组
2. Tuple 元组
3. Set 集合
4. Map 映射

自定义对象
1. interface 定义

特殊类型
1. null
2. undefined
3. object
4. symbol
5. any
6. unknown
7. void
8. never
*/

// case 1: 只有基础类型, 其实就是变量
const name: string  = "gjj";
const age: number = 18;

// case 2: 基础类型 + 容器
const names: Array<string> = ['gjj', 'szk'];
const names2: string[] = ['gjj', 'szk'];
const names3: Set<string> = new Set(['gjj', 'szk', 'gjj']); // 实际只保存 2 个不重复的值
const name_age: Map<string, number> = new Map([
  ['gjj', 18], // 元组
  ['szk', 20]
]);
const single_tuple: string = 'gjj'; // 一元组
const tuple: [string, number] = ['gjj', 18]; // 二元组
const triple: [string, number, boolean] = ['gjj', 18, true]; // 三元组
// 四元组...

// case3: 自定类型 + 容器 + 基础类型
export interface Person {
  name: string,
  age: number,
  phones: Array<Phone>,
  attributes: Map<string, AttributeValue>,
  schools: [string, string, string, string]
}

interface AttributeValue {
  value: any,
  extra: any // 额外信息
}

// 枚举的值类型是 number
enum Color {
  RED, GREEN, BLACK, BLUE
}

interface Phone {
  brand: string, // 品牌
  price: number,
  color: Color
}

interface ErrorMessage {
  message: string,
  code: number
}

interface ResponseData {
  users: Person[]
}

export interface Response {
  data: ResponseData,
  error: ErrorMessage
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUserList(): Response {
    // 创建 Person 列表
    var phones: Array<Phone> = [
      {brand: 'xiaomi 8', price: 1999, color: Color.BLUE},
      {brand: 'ihpone 11', price: 4999, color: Color.GREEN}
    ];
    var attributes: Map<string, AttributeValue> = new Map([
      ['家乡', {value: '内蒙古', extra: '夏天很凉爽'}],
      ['长相', {value: '很美', extra: '性格还好'}],
    ]);
    var schools: [string, string, string, string] = ['大雁小学', '大雁中学', '大雁中学', '大雁大学'];
    var users: Person[] = [
      {name: "John", age: 18, phones: phones, attributes: attributes, schools: schools},
      {name: "Jane", age: 20, phones: [], attributes: new Map<string, AttributeValue>(), schools: schools}
    ];
    var data: ResponseData = {users: users};
    // 创建 ErrorMessage 对象
    var error: ErrorMessage = {message: "ok", code: 200};
    var response: Response = {
      data: data,
      error: error
    };
    return response;
  }
}
