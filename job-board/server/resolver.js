import {Company, Job} from "./db.js";

export const resolvers = {
    Query: {
            job: (root, { id }) => Job.findById(id)
            ,
            jobs: () => Job.findAll(),
            company: (root, { id }) => Company.findById(id)
    },

    Job: {
        company: (job) => Company.findById(job.companyId)
    },

    Company: {
        jobs: (company) => Job.findAll((job) => job.companyId === company.id)
    }
}
