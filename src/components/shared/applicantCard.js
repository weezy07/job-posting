import React from 'react'
import './shared.css'

const ApplicantCard = ({item}) => {
  return (
		<div className="candCard">
			<div className="flex-spaceBet">
				<div className="candProfile">
					<div className="candidateInitial">{item?.name.substr(0, 1).toUpperCase()}</div>
				</div>
				<div className="candDetails">
					<p className="mg-bottom5 candName">{item?.name}</p>
					<p className="no-mg candEmail">{item?.email}</p>
				</div>
			</div>

			<p className="mg-top20 mg-bottom5 candName">Skills</p>

			<p className="no-mg candEmail">{item.skills}</p>
		</div>
	);
}

export default ApplicantCard