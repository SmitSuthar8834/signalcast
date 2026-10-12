import { Injectable } from '@nestjs/common';
import { AnnouncementsRepository } from '@signalcast/nestjs-libraries/database/prisma/announcements/announcements.repository';
import { AnnouncementDto } from '@signalcast/nestjs-libraries/dtos/announcements/announcements.dto';

@Injectable()
export class AnnouncementsService {
  constructor(private _announcementsRepository: AnnouncementsRepository) {}

  getAnnouncements() {
    return this._announcementsRepository.getAnnouncements();
  }

  createAnnouncement(body: AnnouncementDto) {
    return this._announcementsRepository.createAnnouncement(body);
  }

  deleteAnnouncement(id: string) {
    return this._announcementsRepository.deleteAnnouncement(id);
  }
}
