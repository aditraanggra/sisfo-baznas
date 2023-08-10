-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `divisi` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `isAdmin` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pendis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,
    `noRegister` VARCHAR(191) NOT NULL,
    `tglRegister` DATE NULL,
    `pemohon` VARCHAR(191) NOT NULL,
    `penerima` VARCHAR(191) NOT NULL,
    `nik` VARCHAR(16) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `kecamatan` VARCHAR(191) NOT NULL,
    `desa` VARCHAR(191) NOT NULL,
    `program` VARCHAR(191) NOT NULL,
    `asnaf` VARCHAR(191) NOT NULL,
    `rpPermohonan` VARCHAR(191) NOT NULL,
    `rpRealisasi` VARCHAR(191) NOT NULL,
    `tglRealisasi` DATE NULL,
    `uploadData` VARCHAR(191) NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATE NULL,

    UNIQUE INDEX `dataPendis_noRegister_key`(`noRegister`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
