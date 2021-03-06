import { container } from "tsyringe";

import IStorageProvider from "./StorageProvider/models/IStorageProvider";
import DiskStorageProvider from "./StorageProvider/implementations/DiskStorageProvider";

import IMailTemplateProvider from "./MailTemplateProvider/models/IMailTemplateProvider";
import HandlebarsMailTemplateProvider from "./MailTemplateProvider/implementations/HandlebarsMailTemplateProvider";

import './StorageProvider';
import './MailTemplateProvider';
import './MailProvider';
import './CacheProvider';

// import IMailProvider from "./MailProvider/models/IMailProvider";
// import EtherealMailProvider from "./MailProvider/implementations/EtherealMailProvider";
// import SESMailProvider from "./MailProvider/implementations/SESMailProvider";

// container.registerSingleton<IStorageProvider>(
//   "StorageProvider",
//   DiskStorageProvider,
// );

// container.registerSingleton<IMailTemplateProvider>(
//   "MailTemplateProvider",
//   HandlebarsMailTemplateProvider,
// );

// container.registerInstance<IMailProvider>(
//   "MailProvider",
//   mailConfig.driver === 'ethereal'
//     ? container.resolve(EtherealMailProvider)
//     : container.resolve(SESMailProvider),
// );
