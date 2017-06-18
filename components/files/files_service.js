/**
 * A service that retrieves file/asset information from the API.
 * @final
 */
class FilesService {
  /**
   * @param {!angular.$http} $http
   * @param {!angular.$q} $q
   */
  constructor($http, $q) {
    /** @private {!angular.$http} */
    this.http_ = $http;

    /** @private {!angular.$q} */
    this.q_ = $q;

    /** @private {!Map<string, string>} */
    this.fileIdToFileUrl_ = new Map();

    /** @private {!Array<!Object>} */
    this.requestQueue_ = [];
  }

  /**
   * Returns the file URL.
   * @param {string} fileId
   * @return {!angular.$q.Promise<string>}
   */
  getFileUrl(fileId) {
    const deferred = this.q_.defer();
    this.enqueueRequest_(fileId, deferred);

    return deferred.promise;
  }

  /**
   * Enqueues a request with the file ID and deferred.
   * @param {string} fileId
   * @param {angular.$q.Deferred} deferred
   * @private
   */
  enqueueRequest_(fileId, deferred) {
    const request = {
      fileId,
      deferred,
    };

    this.requestQueue_.push(request);

    if (this.requestQueue_.length === 1) {
      this.dequeueRequest_();
    }
  }

  /**
   * Recursively dequeues the first request in the queue.
   * @private
   */
  dequeueRequest_() {
    const request = this.requestQueue_[0];

    if (this.fileIdToFileUrl_.size === 0) {
      this.buildFileIdToFileUrl_().then(() => {
        request.deferred.resolve(this.fileIdToFileUrl_.get(request.fileId));

        this.requestQueue_.splice(0, 1);
        if (this.requestQueue_.length > 0) {
          this.dequeueRequest_();
        }
      });
    } else {
      request.deferred.resolve(this.fileIdToFileUrl_.get(request.fileId));

      this.requestQueue_.splice(0, 1);
      if (this.requestQueue_.length > 0) {
        this.dequeueRequest_();
      }
    }
  }

  /**
   * Builds the mapping of file IDs to file URLs.
   * @return {!angular.$q.Promise}
   * @private
   */
  buildFileIdToFileUrl_() {
    const path = constants.GwApiPath.FILES + '?' + constants.ApiParams.IDS +
        '=' + constants.ALL;

    return this.http_.get(path).then((response) => {
      response.data.forEach((fileInfo) => {
        this.fileIdToFileUrl_.set(fileInfo.id, fileInfo.icon);
      });
    });
  }
}

angular.module('mainApp.services.files', [])
    .service('filesService', FilesService);
