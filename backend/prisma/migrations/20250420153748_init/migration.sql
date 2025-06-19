-- CreateTable
CREATE TABLE `Employee` (
    `employee_id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_name` VARCHAR(191) NOT NULL,
    `employee_mobile` VARCHAR(191) NOT NULL,
    `emp_category_id` INTEGER NOT NULL,

    PRIMARY KEY (`employee_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_emp_category_id_fkey` FOREIGN KEY (`emp_category_id`) REFERENCES `EmployeeCategory`(`emp_category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
