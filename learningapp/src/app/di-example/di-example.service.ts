import { Injectable } from '@angular/core';

export abstract class DiExampleService {
  abstract sayHello(): string;
}

@Injectable()
export class Earth extends DiExampleService {
  public sayHello(): string {
    return 'hello earth';
  }

  public earthSpecial(): string {
    return 'earthsumma';
  }

}

@Injectable()
export class Moon extends DiExampleService {
  public sayHello(): string {
    return 'hello moon';
  }

  public moonSpecial(): string {
    return 'moonsumma';
  }
}
