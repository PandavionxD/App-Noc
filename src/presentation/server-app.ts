import { CheckService } from "../domain/uses-cases/check-service";
import { Cron } from "../services/cron";

export class ServerApp {
  public static start() {
    console.log("Server started!!!");
    
    Cron.start("*/1 * * * * *", () => {
        
      const url = "http://localhost:3000/posts";
      new CheckService(
        () => console.log(url,"Servicio is OK!" ),
        (error) => console.log("Service is Loss", error)
        ).start(url);
    });
    

    // ? SE PUEDE MANDAR VARIAS INSTANCIAS DE CRON SERVICE
    // Cron.start("*/2 * * * * *", () => {
    //   const date = new Date();
    //   console.log("2 seconds", date);
    // });
    
    // Cron.start("*/5 * * * * *", () => {
    //   const date = new Date();
    //   console.log("3 seconds", date);
    // });
  }
}
