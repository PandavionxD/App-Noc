import { CronJob } from "cron";

export type CronType = string | Date
export type Ontick = ()=>void


export class Cron {

    public static start(crontype: CronType, ontick : Ontick ){
        const job = new CronJob(crontype,ontick);
        job.start()
        return job
    }
}