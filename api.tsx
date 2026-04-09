

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

  export async function dummySuccessApi(){
    await delay(1000);
    return "Success!"
  }