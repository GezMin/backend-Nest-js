import { ApiProperty } from '@nestjs/swagger'
import {
    DataType,
    Column,
    Model,
    Table,
    BelongsToMany,
} from 'sequelize-typescript'
import { User } from 'src/users/users.model'
import { UserRoles } from './user-roles.model'

interface RoleCreationAttrs {
    value: string
    descripton: string
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Unique ID' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number

    @ApiProperty({ example: 'ADMIN', description: 'Value Role User' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string

    @ApiProperty({ example: 'Admin', description: 'Descripton Role' })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}
