import React from 'react';

// Directly received JSON 


const Team = ({team}) => {
  return (
    <div style={{ backgroundColor: team.bgColor, color: team.textColor,padding: '2rem' }}>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Text Section */}
        <div className="mb-10 md:mb-16">
          <h2 className={`mb-4 text-center text-2xl font-bold`} style={{  }}>
            {team.teamInfo.headings.title} {/* Directly accessing title */}
          </h2>
          <p className="mx-auto max-w-screen-md text-centermd:text-lg">
            {team.teamInfo.headings.subheading} {/* Directly accessing subheading */}
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {team.teamInfo.members.map(member => (
            <div key={member.id} className="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
                <img
                  src={member.imageUrl}
                  loading="lazy"
                  alt={member.name}
                  className="h-20 w-20 md:h-28 md:w-28 object-cover object-center rounded-full"
                />
              <div>
                <div className={`font-bold`} >{member.name}</div>
                <p className="text-center text-sm sm:text-left md:text-base">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
