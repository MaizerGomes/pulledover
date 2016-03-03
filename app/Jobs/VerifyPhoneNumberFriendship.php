<?php

namespace App\Jobs;

use App\Jobs\Job;
use App\Phone\NumberVerifier;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class VerifyPhoneNumberFriendship extends Job
{
    use InteractsWithQueue, SerializesModels;

    private $friend;

    public function __construct($friend)
    {
        $this->friend = $friend;
    }

    public function handle(NumberVerifier $verifier)
    {
        $verifier->verifyFriendsNumber(
            $this->friend,
            str_random(16)
        );
    }
}
