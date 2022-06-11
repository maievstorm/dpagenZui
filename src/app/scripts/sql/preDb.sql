create table dpzconf.users(
	id varchar(450) not null primary key,
	accessfailedcount int not null,
	email varchar(256) null,
	emailconfirmed bit not null,
	lockoutenabled bit not null,
	lockoutend timestamp null,
	normalizedemail varchar(256) null,
	normalizedusername varchar(256) null,
	passwordhash varchar null,
	phonenumber varchar null,
	phonenumberconfirmed bit not null,
	securitystamp varchar null,
	twofactorenabled bit not null,
	username varchar(256) null
	);

create table dpzconf.roles(
	id varchar(450) not null primary key,
	name varchar(256) null,
	normalizedname varchar(256) null,
	);
 
create table dpzconf.userroles(
	userid varchar(450) not null,
	roleid varchar(450) not null,
 PRIMARY KEY(userid,roleid)
 );
 
create table  dpzconf.subcriptions (
	id varchar(450) not null primary key,
	name varchar(256) null
	);

create table dpzconf.usersubs(
	userid varchar(450) not null,
	subsid varchar(450) not null,
 PRIMARY KEY(userid,subsid)
 );
 
 create table  dpzconf.resourcetype (
	id varchar(450) not null primary key,
	name varchar(256) null
	);
 
 create table  dpzconf.resources (
	id varchar(450) not null primary key,
	subsid varchar(450) not null,
	resourcetypeid varchar(450)  
	name varchar(256) null,
	resourceconf varchar null,
	resourceacckey varchar null,
	resourceseckey varchar null
	);
	

create table dpzconf.userresource(
	userid varchar(450) not null,
	ressid varchar(450) not null,
 PRIMARY KEY(userid,ressid)
 );
 
 
 
