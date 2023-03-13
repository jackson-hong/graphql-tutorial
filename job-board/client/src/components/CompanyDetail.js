import { useParams } from 'react-router';
import {getCompany} from "../graphql/queries";
import {useEffect, useState} from "react";
import JobList from "./JobList";

function CompanyDetail() {
    const [company, setCompany] = useState(null);
    const { companyId } = useParams();
    console.log(companyId)
    useEffect(() => {
        getCompany(companyId).then(setCompany)
    }, [companyId])

    if(!company) {
        return <p>Loading...</p>
    }
    console.log(company.jobs)
  return (
    <div>
      <h1 className="title">
        {company.name}
      </h1>
      <div className="box">
        {company.description}
      </div>
        <JobList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
