window.SIDEBAR_ITEMS = {"enum":[["BytesRejection","Rejection used for `Bytes`."],["ExtensionRejection","Rejection used for `Extension`."],["FailedToBufferBody","Rejection type for extractors that buffer the request body. Used if the request body cannot be buffered due to an error."],["FormRejection","Rejection used for `Form`."],["HostRejection","Rejection used for `Host`."],["PathRejection","Rejection used for `Path`."],["QueryRejection","Rejection used for `Query`."],["RawFormRejection","Rejection used for `RawForm`."],["StringRejection","Rejection used for [`String`]."]],"struct":[["FailedToDeserializeForm","Rejection type used if the `Form` extractor is unable to deserialize the form into the target type."],["FailedToDeserializeQueryString","Rejection type used if the `Query` extractor is unable to deserialize the form into the target type."],["FailedToResolveHost","Rejection type used if the `Host` extractor is unable to resolve a host."],["InvalidFormContentType","Rejection type for `Form` or `RawForm` used if the `Content-Type` header is missing or its value is not `application/x-www-form-urlencoded`."],["InvalidUtf8","Rejection type used when buffering the request into a [`String`] if the body doesn’t contain valid UTF-8."],["LengthLimitError","Encountered some other error when buffering the body."],["MissingExtension","Rejection type for `Extension` if an expected request extension was not found."],["MissingPathParams","Rejection type used if axum’s internal representation of path parameters is missing. This is commonly caused by extracting `Request<_>`. `Path` must be extracted first."],["UnknownBodyError","Encountered an unknown error when buffering the body."]]};