<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\ContactUs;
use Mail;

class ContactFormController extends Controller
{
  public function submit(Request $request) {
    $this->validate($request, [
      'name'      => 'required|string',
      'email'     => 'required|email',
      'company'   => 'required|string',
      'telephone' => 'required|regex:/(01)[0-9]{9}/',
      'message'   => '',
    ]);

       Mail::send('email',
        array(
          'name'         => $request->get('name'),
          'company'      => $request->get('company'),
          'telephone'    => $request->get('telephone'),
          'email'        => $request->get('email'),
          'service'      => $request->get('service'),
          'user_message' => $request->get('message')
        ), function($message)
        {
          $message->to('example@email.com', 'Admin')->subject('Contact Form Query');
        });
    return response()->json(null, 200);
  }
}
