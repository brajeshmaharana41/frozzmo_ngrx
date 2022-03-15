import { createAction, props } from '@ngrx/store';
import { SignUP } from 'src/app/services/auth_services/auth_module';

  export const Signup_Action  = createAction(
    '[Auth/API] Post SignUp Data',
    props<{ signupmodul: SignUP }>()
  );
  export const SignUP_ActionType = createAction(
    'Load SignUP Data',
  );
