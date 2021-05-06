<?php

namespace Uasoft\Badaso\Middleware;

use Closure;
use Uasoft\Badaso\Helpers\CaseConvert;
use Uasoft\Badaso\Models\Configuration;
use Uasoft\Badaso\Helpers\AuthenticatedUser;
use Uasoft\Badaso\Helpers\ApiResponse;

class ApiRequest
{
    public function handle($request, Closure $next)
    {
        $lang = ($request->hasHeader('Accept-Language')) ? $request->header('Accept-Language') : 'en';

        app()->setLocale($lang);

        $request->merge(CaseConvert::snake($request->all()));

        return $next($request);
    }
}
