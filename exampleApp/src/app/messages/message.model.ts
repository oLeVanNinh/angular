export class Message {
  constructor(private text: string, private error: boolean = false, private response?: [string, (string) => void][]) {}
}
