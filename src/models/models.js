const sequelize = require('../../db')
const {DataTypes} = require('sequelize')

//описание моделей
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
})

const WorkSpace = sequelize.define('workspace', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

const Task = sequelize.define('task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING}
})

const TaskStatus = sequelize.define('task_status', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    order: {type: DataTypes.INTEGER, allowNull: false}
})

//связующая таблица User and Workspace
const UserWorkspaceLinks = sequelize.define('user_workspace_links', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

//описание связей

//многие ко многим User и Workspace
User.belongsToMany(WorkSpace, {through: UserWorkspaceLinks, onDelete: 'CASCADE'})
WorkSpace.belongsToMany(User, {through: UserWorkspaceLinks})

User.hasMany(Task, {as: 'owner', foreignKey: 'owner_id', onDelete: 'CASCADE'})
Task.belongsTo(User, {foreignKey: 'owner_id'})

User.hasMany(Task, {as: 'responsible', foreignKey: 'responsible_id', onDelete: 'CASCADE'})
Task.belongsTo(User, {foreignKey: 'responsible_id'})

WorkSpace.hasMany(Task, {as: 'workspace_task', foreignKey: 'workspace_id', onDelete: 'CASCADE'})
Task.belongsTo(WorkSpace, {foreignKey: 'workspace_id'})

WorkSpace.hasMany(TaskStatus, {as: 'workspace_task_status', foreignKey: 'workspace_id', onDelete: 'CASCADE'})
TaskStatus.belongsTo(WorkSpace, {foreignKey: 'workspace_id'})

TaskStatus.hasMany(Task, {as: 'status', foreignKey: 'status_id', onDelete: 'CASCADE'})
Task.belongsTo(TaskStatus, {foreignKey: 'status_id'})

module.exports = {
    User,
    WorkSpace,
    Task,
    TaskStatus,
    UserWorkspaceLinks
}

