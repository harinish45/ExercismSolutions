"""Exercism Python Track: Guido's Gorgeous Lasagna."""

EXPECTED_BAKE_TIME = 40
PREPARATION_TIME_PER_LAYER = 2

def bake_time_remaining(elapsed_bake_time: int) -> int:
    """Calculate the remaining bake time in minutes.

    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.
    """
    return max(0, EXPECTED_BAKE_TIME - elapsed_bake_time)

def preparation_time_in_minutes(number_of_layers: int) -> int:
    """Calculate preparation time based on the number of layers.

    :param number_of_layers: int - number of lasagna layers.
    :return: int - preparation time (in minutes) where each layer takes 2 minutes.
    """
    return number_of_layers * PREPARATION_TIME_PER_LAYER

def elapsed_time_in_minutes(number_of_layers: int, elapsed_bake_time: int) -> int:
    """Calculate the total elapsed cooking time (prep + bake) in minutes.

    :param number_of_layers: int - number of layers in the lasagna.
    :param elapsed_bake_time: int - elapsed cooking time.
    :return: int - total time elapsed (in minutes) spent preparing and cooking.
    """
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
