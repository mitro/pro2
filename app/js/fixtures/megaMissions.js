define(function () {
	return [
		{
			id: 1,
            code:'beginner',
			type: 'mega',
			name: 'Новичок в IT',
			status: 'done',
			miniMissions: []
		},
        {
            id: 2,
            code:'netDev',
            type: 'mega',
            name: '.NET разработчик',
            status: 'done',
            miniMissions: [1,2]
        },
        {
            id: 3,
            code:'frontDev',
            type: 'mega',
            name: 'Front-end dev',
            status: 'new',
            miniMissions: [5,6,7]
        },
        {
            id: 4,
            code:'Arch',
            type: 'mega',
            name: 'Solution Architect',
            status: 'progress',
            miniMissions: [10,11,12,13]
        },
        {
            id: 5,
            code:'dbDev',
            type: 'mega',
            name: 'Database разработчик',
            status: 'lock',
            miniMissions: [8,9]
        }
	];
})